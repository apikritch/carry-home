FROM node:18.14.2-alpine

WORKDIR /server

COPY package.json ./

COPY pnpm-lock.yaml ./

RUN npm install -g pm2

RUN npm install -g pnpm

RUN pnpm remove sqlite3

RUN pnpm add sqlite3

COPY . .

EXPOSE 8081

CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]
