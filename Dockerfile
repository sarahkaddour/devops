FROM node:latest
FROM mongo

WORKDIR /usr/src/app

RUN \
    apt-get update && \
    apt-get install -y git && \
    apt-get install -y nodejs \
    npm install lerna && \
    npm install bunyan && \
    rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN npm install --loglevel notice

COPY packages/devops_backend ./packages/devops_backend
COPY packages/devops_frontend ./packages/devops_frontend

#EXPOSE 8000

COPY lerna.json .
RUN lerna bootstrap

CMD [ "npm", "start" ]