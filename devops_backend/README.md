# User API http-server

Simple http-server with a user API

##  TODO

* Clone this repo and using [duplicating](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository) create your own repository on GitHub or GitLab
* **Important!** Make your repository **PRIVATE**
* Find all the TODO comments and enrich this app
* If you have questions, ask me by email sergei@adaltas.com (link your private repo, if you have technical questions and invite me to you project)

## Functionality

* Uses default configuration with a path of the file storage
* Start http-server
* Create a user
* Get a user information

## Installation

```
git clone ...
npm install
```

## Usage

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
  lastname: 'toto-lastname'
}
```

2. GET user by username

```
http://localhost:3000/user/sergkudinov
```

## Developer

Run tests:
```
npm test
```

## Author

Sergei Kudinov   
sergei@adaltas.com

TEST 2

Test CI


## Docker
docker run -p 3000:3000 -v /usr/src/app/db sarahkaddour/devopsproject