ARG node_version
FROM node:$node_version as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

FROM nginx:latest
COPY --from=build-step /app/dist/OnlinePortfolio-Frontend /usr/share/nginx/html
