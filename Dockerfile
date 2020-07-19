FROM node:latest AS builder
WORKDIR /web
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:alpine
WORKDIR /web
RUN npm install -g serve
COPY --from=builder /web/build ./build

ENTRYPOINT ["serve","-s","build"]
