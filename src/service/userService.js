import { prismaClient } from "../application/database";
import { ResponseError } from "../error/responseError";
import { registerUserValidation } from "../validation/userValidation";
import { validate } from "../validation/validation";
import bcrypt from "bcrypt";

const register = async (request) => {
    const user = validate(registerUserValidation, request);

    const countUser = await prismaClient.user.count({
        where: {
            username: user.username
        }
    });

    user.password = await bcrypt.hash(user.password, 10);

    if(countUser === 1) {
        throw new ResponseError(400, "Username already exists")
    }

    return prismaClient.user.create({
        data: user,
        select: {
            username: true,
            name: true
        }
    })
}

export default {
    register
}