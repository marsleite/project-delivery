FROM node:alpine

WORKDIR /usr/src/vue-app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "serve"]