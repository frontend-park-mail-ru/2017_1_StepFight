FROM nginx:1.13.0-alpine

RUN apk add --update bash

COPY ./nginx.conf /etc/nginx
COPY ./dist /usr/share/nginx/static
COPY ./page /usr/share/nginx/static
COPY ./src/img /usr/share/nginx/static
COPY ./src/music /usr/share/nginx/static
COPY ./service-worker.js /usr/share/nginx/static

CMD /bin/bash -c "echo \"listen $PORT;\" > /etc/nginx/listen.conf && nginx -g 'daemon off;'"