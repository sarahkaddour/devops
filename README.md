<h1 align="center">Users manager - a DevOps project</h1>
<p align="center">
  Simple fullstack app with a user and a frontend API
</p>


## 🤝 Authors

- *Celine BENIDDIR* -  [@cbeniddir](https://twitter.com/cbeniddir) <br/>
- *Sarah KADDOUR* -  [@sarahkaddour](https://github.com/sarahkaddour)

## 🍯 Functionalities
### Features:
* Start http-server
* Create a user
* Get a user information
* Unit tests
* Travis CI deployment
* Heroku deployment
* Docker deployment
* Minikube & Kubernetes

### Bonus tasks:
* Connecting to mongodb database
* Delete a user
* Front-end microservice
* E2E tests using Cypress

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

### E2E tests using Cypress
At the root of the project, in 2 different terminals, run:
```
npm start
```
and
```
npm run test:cy
```

## 🌎 Deployment

### Heroku
Deploy on Heroku (synchronized with GitHub)

```
git add --all
git commit -m "commit message"
git push heroku master
```

### Docker
#### Run frontend and backend separately:
* Build the frontend app before building docker images, in the devops_frontend folder run:
```
npm build
```

* To build and run docker images:
For backend:
```
cd devops_backend
docker build -t <docker-account-name>/<custom-image-name-backend>:1.0 .
docker run -p 3000:3000 <docker-account-name>/<custom-image-name-backend>:1.0
```
For frontend:
```
cd devops_frontend
docker build -t <docker-account-name>/<custom-image-name-frontend>:1.0 .
docker run -p 80:80 <docker-account-name>/<custom-image-name-frontend>:1.0
```

#### Run a docker images simultaneously using docker compose
- Build the frontend app
```
cd devops_frontend
npm build
```
- At the root of the project run:
```
docker-compose up
```

### Kubernetes
#### Deploying the app using kubectl:
1. Create a Deployment
```bash
kubectl create deployment <your_deployment_name> --image=<username>/<imagename>:<tag>
```

2. To access your app Deployment, expose it as a Service:

```bash
kubectl expose deployment <your_deployment_name> --type=NodePort --port=<YOUR_PORT>
```

3. Explore docker containers and images, pods, deployments, services using:

- `docker ps`
- `kubectl`
- the Dashboard

4. Access to your app

Run a command `minikube service <your_deployment_name> --url` and navigate to the link.

#### Deploy an app using Manifest yaml file: deplyoyment.yml

Run with ```kubectl apply [OPTIONS]```
