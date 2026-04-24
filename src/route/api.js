import express from "express";
import userController from "../controller/userController.js";
import contactController from "../controller/contactController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";


const userRouter = new express.Router()
userRouter.use(authMiddleware)

//API user
userRouter.get('/api/users/current', userController.get);
userRouter.patch('/api/users/current', userController.update);
userRouter.delete('/api/users/logout', userController.logout);

//API contact
userRouter.post('/api/contacts', contactController.create);

export {
    userRouter
}