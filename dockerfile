FROM node:lts as buildEnv

ARG SERVICE_NAME

WORKDIR /app

COPY package* ./

RUN npm ci

COPY . .

RUN npm run build ${SERVICE_NAME}

FROM node:lts-alpine as finalCodeEnv

ARG SERVICE_NAME
ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}
ENV SERVICE_NAME=${SERVICE_NAME}

WORKDIR /app

COPY --from=buildEnv /app/package* ./

RUN npm i --prod

COPY --from=buildEnv /app/dist dist

FROM alpine 

ARG SERVICE_NAME
ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}
ENV SERVICE_NAME=${SERVICE_NAME}

WORKDIR /app

RUN apk add nodejs && rm -rf /var/cache/apk/*

COPY --from=finalCodeEnv /app .

ENTRYPOINT node dist/apps/$SERVICE_NAME/main
