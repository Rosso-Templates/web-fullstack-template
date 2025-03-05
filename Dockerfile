FROM node:latest

WORKDIR /usr/src/app

COPY . ./

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

CMD [ "node", ".output/server/index.mjs" ]
