FROM node:16

WORKDIR /filemetadata-microservice

COPY package.json ./
RUN npm install
COPY . .

CMD [ "npm", "start" ]