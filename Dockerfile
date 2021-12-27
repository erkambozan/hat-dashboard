FROM node:14-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app
COPY src /app/src
RUN yarn install && yarn cache clean
COPY . /app
EXPOSE 3000

CMD ["yarn", "run", "start"]
