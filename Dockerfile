FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN  npm run build-only

RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "5001"]
