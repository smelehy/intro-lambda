FROM python:3.11
ENV PYTHONBUFFERED 1
WORKDIR /code
RUN mkdir -p /npm/src/js
RUN mkdir -p /npm/dist
RUN mkdir -p /npm/config 
WORKDIR /npm
ADD ./static/js src/js
ADD ./config/webpack.config.js .
RUN curl --silent --location https://deb.nodesource.com/setup_19.x | bash -
RUN apt-get install --yes nodejs
RUN npm init --yes \
       && npm update \
       && npm install react-dom@18 --save \
       && npm install react@18 --save 
RUN npm install --save @babel/core \
       && npm install --save @babel/cli \
       && npm install --save @babel/preset-env \
       && npm install --save @babel/polyfill \
       && npm install --save @babel/preset-react
RUN npm install --save babel-loader \
       && npm install --save webpack \
       && npm install --save webpack-cli \
       && npm install --save css-loader url-loader svg-loader \
       && npm i @aws-amplify/ui-react aws-amplify \
       && npm install --global http-server
RUN apt-get install --yes nano
