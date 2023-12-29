FROM --platform=linux/amd64 node:lts

ENV APP_ROOT /app
ENV PORT 9200

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm
RUN npm build

ENV HOST 0.0.0.0
EXPOSE 8999

#Start main app
CMD ["npm", "start"]
