FROM node:18-alpine AS build

WORKDIR /app
COPY . . 

RUN yarn
RUN yarn build

FROM nginx:1.18-alpine AS deploy

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
RUN rm -rf /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/public .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
