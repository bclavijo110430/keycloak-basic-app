FROM node:21-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 5002
CMD [ "npm", "start" ]
