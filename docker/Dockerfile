FROM node:14.19.0-alpine as base

WORKDIR /app

COPY . .
RUN npm install

CMD [ "npm", "start" ]