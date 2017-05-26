FROM nginx:1.13.0-alpine

RUN apk add --update bash

COPY ./nginx.conf /etc/nginx
COPY ./mime.types /etc/nginx
COPY ./page /usr/share/nginx/static/page
COPY ./dist /usr/share/nginx/static/dist
COPY ./src/img /usr/share/nginx/static/src/img
COPY ./src/music /usr/share/nginx/static/src/music
COPY ./src/three-models /usr/share/nginx/static/src/three-models
COPY ./src/fonts /usr/share/nginx/static/src/fonts
COPY ./manifest.json /usr/share/nginx/static
COPY ./service-worker.js /usr/share/nginx/static

EXPOSE 7000

CMD /bin/bash -c "echo \"listen $PORT;\" > /etc/nginx/listen.conf && nginx -g 'daemon off;'"