<h1 align="center">Users manager - a DevOps project</h1>
<p align="center">
  Simple fullstack app with a user a frontend API
</p>

## 🍯 Functionalities
### Features:
* Start http-server
* Create a user
* Get a user information
* Unit tests

### Bonus tasks:
* Connecting to mongodb database
* Delete a user
* Front-end microservice
* E2E tests

## 🔨 Installation

```
git clone ...
npm install
```

## 🚀 Usage
To run both backend and frontend:
```
npm start
```

Then go to `http://localhost:3000` on your browser

### Using Postman app

1. POST Create user:

```
http://localhost:8000/user/
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
http://localhost:8000/user/:username
```
Params parameters:
```
{
  username: 'toto'
}

```

3. DELETE user 
```
http://localhost:8000/user/:username
```
Params parameters:
```
{
  username: 'toto'
}
```



## ✏️ Testing

### Unit tests
At the root of the project, run:
```
npm test
```

### E2E tests
At the root of the project, run:
```
npm test
```
## 🌎 Deployment

### Travis CI

### Heroku

### Docker
Run frontend and backend separately:
- To build a docker image (frontend and backend separately):
```
cd devops_backend
docker build -t sarahkaddour/imagebackend:1.0 .
docker run -p 3000:3000 sarahkaddour/imagebackend:1.0
cd devops_frontend
docker run -p 80:80 sarahkaddour/imagebackend:1.0
```

- To build a docker image using docker compose, at the root of the project:
```
docker-compose up
```

### Kubernetes
* Deploying the app using your file deployment.yml:
```
kubectl create deployment <your_deployment_name> --image=<username>/<imagename>:<tag>
kubectl expose deployment <your_deployment_name> --type=NodePort --port=<YOUR_PORT>
kubectl apply
```


## 🤝 Authors

- *Celine BENIDDIR* -  [@cbeniddir](https://twitter.com/cbeniddir) <br/>
- *Sarah KADDOUR* -  [@sarahkaddour](https://github.com/sarahkaddour)


## TODO
- List of all the work performed (briefly, describing features and bonus tasks)
- Installing / running / using / testing / deployment instructions (everyone is needed)
- All the necessary links with the tools integrated (Travis CI, Heroku, Docker Hub ... )
- Other additional info you want to include
