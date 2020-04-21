FROM node:latest
FROM mongo

WORKDIR /usr/src/app

RUN \
    apt-get update && \
    apt-get install -y git && \
    npm i lerna -g --loglevel notice && \
    npm i bunyan -g --loglevel notice && \
    rm -rf /var/lib/apt/lists/*
    
COPY package.json .
RUN npm install --loglevel notice

COPY packages/devops_backend ./packages/devops_backend
COPY packages/devops_frontend ./packages/app1-devops_frontend

#EXPOSE 8000

COPY lerna.json .
RUN lerna bootstrap

CMD [ "npm", "start" ]