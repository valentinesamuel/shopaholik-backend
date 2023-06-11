FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

RUN ls -la

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start:prod"]