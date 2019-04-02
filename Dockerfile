FROM node:8.15.1-alpine

WORKDIR /app

COPY package.json ./
COPY ./src/ ./src/
COPY ./public ./public/

RUN npm install