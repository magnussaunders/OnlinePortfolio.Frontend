ARG node_version
FROM node:$node_version as build-step
ENV NODE_ENV=production

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install --production

COPY . /app

RUN npm run build --prod

FROM nginx:latest
COPY --from=build-step /app/docs /usr/share/nginx/html