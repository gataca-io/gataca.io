FROM node:18-alpine AS build

WORKDIR /app
COPY . . 

RUN yarn
RUN yarn build

FROM nginx:1.18-alpine AS deploy

RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=build /app/public .

RUN chown -R nginx:nginx /app && chmod -R 755 /app && \
        chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid
USER nginx

ENTRYPOINT ["nginx", "-g", "daemon off;"]
