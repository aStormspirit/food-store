FROM node:19-alpine

WORKDIR /app

COPY package.json ./package.json
RUN npm install

COPY next.config.js ./next.config.js
COPY pages ./pages
COPY styles ./styles
COPY public ./public

CMD ['npm', 'run', 'dev']