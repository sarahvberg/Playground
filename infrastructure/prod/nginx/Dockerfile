FROM node:16-alpine3.11 as builder
RUN mkdir /build
WORKDIR /build/
COPY . .
ENV NODE_OPTIONS="--max-old-space-size=2048"
RUN yarn
RUN yarn run build
FROM nginx:stable
COPY --from=0 /build/build /usr/share/nginx/html
COPY infrastructure/prod/nginx/nginx.conf /etc/nginx/conf.d/default.conf