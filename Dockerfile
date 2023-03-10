##################################################################################
# IMPORTANT! DO NOT USE THIS CONFIG FOR PRODUCTION ENVIRONMENT!                  #
##################################################################################
FROM node:14.15.4 as node
WORKDIR /app
COPY . .
RUN npm install nrm
RUN nrm use taobao
RUN npm install
RUN npm run build

FROM nginx:1.23.2-alpine
RUN cd /
RUN mkdir /logs
RUN chmod 700 /logs
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist/browser /usr/share/nginx/html
EXPOSE 80
ENV PATH=$PATH:/root:/app:.