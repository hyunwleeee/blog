FROM node:18-alpine AS builder

ENV PORT 3000

WORKDIR /app

COPY node_modules node_modules
COPY package.json package.json
COPY public public
COPY .next .next
COPY next.config.mjs next.config.mjs
COPY .env .env

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]
