FROM node:18-alpine AS build

WORKDIR /app
COPY . . 

RUN yarn
RUN yarn build

FROM nginxinc/nginx-unprivileged:1.20 AS deploy

#RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=build /app/public .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
