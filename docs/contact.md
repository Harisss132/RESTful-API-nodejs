# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Headers : 
- Authorization : token

Request Body : 
```json
{
    "frist_name" : "Ahmad",
    "last_name" : "Haris",
    "email" : "ahmadharis@googlemail.com",
    "phone" : "028918112233"
}
```

Response Body Success : 
```json
{
    "data" {
        "id" : 1,
        "frist_name" : "Ahmad",
        "last_name" : "Haris",
        "email" : "ahmadharis@googlemail.com",
        "phone" : "028918112233"
    }
}
```

Response Body Error : 
```json
{
    "errors" : "Email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers : 
- Authorization : token

Request Body : 
```json
{
    "frist_name" : "Ahmad",
    "last_name" : "Haris",
    "email" : "ahmadharis@googlemail.com",
    "phone" : "028918112233"
}
```

Response Body Success : 
```json
{
    "data" : {
        "id" : 1,
        "frist_name" : "Ahmad",
        "last_name" : "Haris",
        "email" : "ahmadharis@googlemail.com",
        "phone" : "028918112233"
    }
}
```

Response Body Error : 
```json
{
    "errors" : "Email is not valid format"
}
```

## GET Contact API

Endpoint : GET /api/contacts/:id

Headers : 
- Authorization : token

Response Body Success : 
```json
{
    "data" : {
        "id" : 1,
        "frist_name" : "Ahmad",
        "last_name" : "Haris",
        "email" : "ahmadharis@googlemail.com",
        "phone" : "028918112233"
    }
}
```

Response Body Error : 
```json
{
    "errors" : "Contact is not found"
}
```

## Search Contact API

Endpoint : GET /api/contacts

Headers : 
- Authorization : token

Query Params : 
- name : Search by first_name or last_name, using like, optional
- email : Search by email, using like, optional
- phone : Search by phone, using like, optional
- page : number of page, default 10
- size : size per page, default 10

Response Body Success : 
```json
{
    "data" : [
        {
            "id" : 1,
            "frist_name" : "Ahmad",
            "last_name" : "Haris",
            "email" : "ahmadharis@googlemail.com",
            "phone" : "028918112233"
        }
        {
            "id" : 2,
            "frist_name" : "Yanto",
            "last_name" : "bowo",
            "email" : "yanobow@googlemail.com",
            "phone" : "028918112233"
        }
        {
            "id" : 3,
            "frist_name" : "Kohwi",
            "last_name" : "Yono",
            "email" : "kohwyon@googlemail.com",
            "phone" : "028918112233"
        }
    ],
    "paging" : {
        "page" : 1,
        "total_page" : 3,
        "total_item" : 30
    }
}
```

Response Body Error : 
```json
{
    "errors" : "Contact is not found"
}
```


## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Headers : 
- Authorization : token

Response Body Success : 
```json
{
    "data" : "OK"
}
```

Response Body Error : 
```json
{
    "errors" : "Contact is not found"
}
```
