GET
https://replicant-cs-p.herokuapp.com/api/Token/

_id: is used to query the entry and update the entry
  ie) 5e85e6d461c7d9721ce281fe

POSTMAN OBJECT
PARAMS
{
  _id: 5e85e6d461c7d9721ce281fe
}
RESULT
[
  {
    "_id": "5e85e6d461c7d9721ce281fe",
    "name": "robin-auth-sb",
    "token": "abcdefadfsdf",
    "timestamp": "2020-04-02T03:25:23.933Z",
    "__v": 0
  }
]


CREATE NEW TOKEN
https://replicant-cs-p.herokuapp.com/api/Token/create

POSTMAN OBJECT
BODY JSON
{
	"name": "robin-auth-sb",
	"token": "abcdefadfsdf",
	"timestamp": "2020-04-02T03:25:23.933Z"
}
RESULT
{
  "id": "5e85e6d461c7d9721ce281fe",
  "name": "robin-auth-sb",
  "msg": "successful create"
}


UPDATE OLD TOKEN
https://replicant-cs-p.herokuapp.com/api/Token/update

POSTMAN OBJECT
BODY JSON
{
	"_id": "5e85e6d461c7d9721ce281fe",
	"token": "1237gXSA0-312cs"	
}
RESULT
{
  "id": "5e85e6d461c7d9721ce281fe",
  "name": "robin-auth-sb",
  "msg": "successful update"
}