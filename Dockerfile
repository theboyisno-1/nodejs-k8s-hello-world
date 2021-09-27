FROM node:14-alpine3.13

WORKDIR /home/code

COPY . .

RUN npm install --production

CMD ["node" "/home/code/index.js"]