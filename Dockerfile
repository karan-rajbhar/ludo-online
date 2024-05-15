FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g vite
RUN npm install

CMD [ "npm", "run", "dev" ]

