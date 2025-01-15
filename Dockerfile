# 빌드 스테이지
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
#WORKDIR /app

# COPY package.json package-lock.json ./
# RUN npm install

# 'Github Actions Runner 환경'에서 
# 'Docker 환경' 안으로 가져온다.
# COPY ./.next/cache ./.next/cache
# COPY .next .next
# COPY ./public ./public
# COPY node_modules node_modules
# COPY next.config.mjs next.config.mjs
# COPY .env.* ./
# COPY . ./
# RUN npm run build

# 캐시 스테이지
# FROM scratch AS cache
# COPY --from=builder /app/.next/cache ./.next/cache

# 실행 스테이지
# FROM node:18-alpine
# WORKDIR /app

# COPY --from=builder /app ./

# EXPOSE 3000
# ENTRYPOINT ["npm", "start"]
