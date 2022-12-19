# FROM node:19.3@sha256:867c09f220095929f3ab4113e7530a6e38833f2eb4317cb8998307528026621f AS build
# COPY . .
# RUN apk install automake, autoconf, libtool, dpkg, pkgconfig, libpng, libpng-dev, g++
# RUN yarn
# RUN yarn build

FROM nginx:1.23-alpine@sha256:0f4e03e4e0e854bafe7ce689a4c2476feb07a88a465bbc7d0f155dd89a6b00db AS deploy

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

# COPY --from=build /app/public ./
COPY /public .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
