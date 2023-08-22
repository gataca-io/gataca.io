FROM node:18-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./yarn.lock ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install
WORKDIR /opt/app
COPY ./ .
 
RUN addgroup -S strapi && adduser -u 2000 -D --gecos "" -S -G strapi strapi 

RUN yarn build
EXPOSE 1337
RUN chown -R strapi:strapi /opt/app

USER strapi
CMD ["yarn", "start"]
