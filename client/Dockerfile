FROM node:18.14.2-alpine AS build

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest

COPY --from=build /client/dist /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf
