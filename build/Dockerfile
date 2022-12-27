FROM node:14 AS builder

WORKDIR /app

COPY . .

RUN yarn install && yarn build


# FROM alpine:3.15 AS build

# RUN apk add --update nodejs npm yarn python3 make g++ libpng-dev

# RUN yarn global add gatsby-cli@2.19.1

# WORKDIR /home/gapp/

# COPY . .

# RUN yarn
# RUN yarn build

#FROM nginx:1.23-alpine@sha256:0f4e03e4e0e854bafe7ce689a4c2476feb07a88a465bbc7d0f155dd89a6b00db AS deploy

#WORKDIR /usr/share/nginx/html
#RUN rm -rf ./*

# COPY --from=build /app/public ./
#COPY /public .

#ENTRYPOINT ["nginx", "-g", "daemon off;"]
