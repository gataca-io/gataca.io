FROM node:18-alpine@sha256:e37da457874383fa9217067867ec85fe8fe59f0bfa351ec9752a95438680056e AS build

WORKDIR /app
COPY . . 

RUN yarn
RUN yarn build

FROM nginxinc/nginx-unprivileged:1.27@sha256:5dde1b131e82ce1a678f081ab74d9b2eb95a39c7d2dec12ab5a59cfeb5626bc1 AS deploy

#RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=build /app/public .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
