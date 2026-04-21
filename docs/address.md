# Address API Spec

## Create Address 

Endpoint : POST /api/contacts/:contactId/addresses

Headers :
- Authorization

Request Body : 
```json
{
    "street" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country" : "Negara apa",
    "postal_code" : "Kode pos"
}
```

Response Body Success :

```json
{
    "data" : {
        "contactId" : 1,
        "street" : "Jalan apa",
        "city" : "Kota apa",
        "province" : "Provinsi apa",
        "country" : "Negara apa",
        "postal_code" : "Kode pos"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Country is required"
}
```

## Update Address API

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization

Request Body : 

```json
{
    "street" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country" : "Negara apa",
    "postal_code" : "Kode pos"
}
```

Response Body Success :

```json
{
    "data" : {
        "id" : 1,
        "street" : "Jalan apa",
        "city" : "Kota apa",
        "province" : "Provinsi apa",
        "country" : "Negara apa",
        "postal_code" : "Kode pos"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Country is required"
}
```

## GET Address API

Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization

Response Body Success :
```json
{
    "data" : {
        "id" : 1,
        "street" : "Jalan apa",
        "city" : "Kota apa",
        "province" : "Provinsi apa",
        "country" : "Negara apa",
        "postal_code" : "Kode pos"
    }
}
```

Response Body Error :
```json
{
    "errors" : "Contact is not found"
}
```

## List Addresses API

Endpoint : GET /api/contacts/:contactId/addresses

Headers :
- Authorization

Response Body Success : 
```json
{
    "data" : [
        {
        "id" : 1,
        "street" : "Jalan apa",
        "city" : "Kota apa",
        "province" : "Provinsi apa",
        "country" : "Negara apa",
        "postal_code" : "Kode pos"
    },
    {
        "id" : 1,
        "street" : "Jalan apa",
        "city" : "Kota apa",
        "province" : "Provinsi apa",
        "country" : "Negara apa",
        "postal_code" : "Kode pos"
    }
    ]
}
```

Response Body Error : 
```json
{
    "errors" : "Contact is not found"
}
```

## Remove Address API

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization

Response Body Success :
```json
    {
        "data" : "OK"
    }
```

Response Body Error :
```json
    {
        "errors" : "Address is not found"
    }
```