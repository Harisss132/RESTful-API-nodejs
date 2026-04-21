# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :
```json
{
    "username" : "haris",
    "password" : "rahasia",
    "name" : "Ahmad Haris Sujana"
}
```

Response Body Succes :
```json
{
    "data" : {
        "username" : "haris",
        "name" : "Ahmad Haris Sujana"
    }
}
```

Response Body Error :
```json
{
    "errors" : "Username Already Register"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :
```json
{
    "username" : "haris",
    "password" : "rahasia",
}
```

Response Body Succes :
```json
{
    "data" : {
        "token" : "unique-token"
    }
}
```

Response Body Error :
```json
{
    "errors" : "Username or Password Wrong"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers : 
- Authorixation : token

Request Body :
```json
{
    "name" : "Ahmad Haris New", //opsional
    "password" : "new password", //opsional
}
```

Response Body Succes :
```json
{
    "data" : {
        "username" : "haris",
        "name" : "Ahmad Haris New"
    }
}
```

Response Body Error :
```json
{
    "errors" : "Name Length max 100"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers : 
- Authorixation : token

Response Body Succes :
```json
{
    "data" : {
        "username" : "haris",
        "name" : "Ahmad Haris Sujana"
    }
}
```

Response Body Error :
```json
{
    "errors" : "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers : 
- Authorixation : token

Response Body Succes :
```json
{
    "data" : "OK"
}
```

Response Body Error :
```json
{
    "errors" : "Unauthorized"
}
```