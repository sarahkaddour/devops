# User API http-server

Simple http-server with a user API

## Functionality

* Connects to mongodb database (BONUS)
* Start http-server
* Create a user
* Get a user information
* Delete a user (BONUS)
* Unit tests
* Front-end app (BONUS)
* E2E tests (BONUS)

## Installation

```
git clone ...
npm install
```

## Usage
To run both backend and frontend:
```
npm start
```

Go to `http://localhost:3000`

### Using Postman app

1. POST Create user:

```
http://localhost:3000/user/
```

Body parameters:
```
{
  username: 'toto',
  firstname: 'toto-firstname',
  lastname: 'toto-lastname',
  team: 'Green'
}
```

2. GET user by username

```
http://localhost:3000/user/sergkudinov
```
Params parameters:
```
{
  username: 'toto'
}

3. DELETE user 

```
http://localhost:3000/user/sergkudinov
```
Params parameters:
```
{
  username: 'toto'
}



## Developer

Run tests:
```
npm test
```

## Authors

Sarah KADDOUR <sarah.kaddour@edu.ece.fr>
Celine BENIDDIR <celine.beniddir@edu.ece.fr>

TEST 2

Test CI

## Travis CI

## Heroku

## Docker
docker run -p 3000:3000 -v /usr/src/app/db sarahkaddour/devopsproject

## Kubernetes


## TODO
- List of all the work performed (briefly, describing features and bonus tasks)
- Installing / running / using / testing / deployment instructions (everyone is needed)
- All the necessary links with the tools integrated (Travis CI, Heroku, Docker Hub ... )
- OK List of collaborators 
- Other additional info you want to include