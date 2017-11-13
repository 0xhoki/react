# Version: 1.0.0
FROM ubuntu:16.10
MAINTAINER kalyuk <kalyuk@magora-systems.com>

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y nginx
RUN apt-get install -y curl

RUN curl https://deb.nodesource.com/setup_8.x > setup_8.x
RUN bash ./setup_8.x
RUN apt-get install -y nodejs

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY proxy/conf.d/default.conf  /etc/nginx/sites-enabled/default

COPY . /usr/src/app

RUN rm -rf node_modules

RUN npm install

ENV NODE_ENV production
ENV OUTPUT_PATH /usr/src/app/dist

RUN node node_modules/.bin/babel-node tools/builder.js
RUN node node_modules/.bin/babel-node tools/buildHtml.js

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
