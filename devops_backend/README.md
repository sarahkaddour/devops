# User API http-server

Simple http-server with a user API

## Functionality

* Uses default configuration with a path of the file storage
* Start http-server
* Create a user
* Get a user information
* Delete a user

## Installation

```
git clone ...
npm install
```

## Usage

```
npm start
```

Go to `http://localhost:8000`

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

3. DELETE user 

```
http://localhost:3000/user/sergkudinov
```

## Developer

Run tests:
```
npm test
```

## Authors

Sarah KADDOUR sarah.kaddour@edu.ece.fr
Celine BENIDDIR celine.beniddir@edu.ece.fr

TEST 2

Test CI


## Docker
docker run -p 3000:3000 -v /usr/src/app/db sarahkaddour/devopsproject