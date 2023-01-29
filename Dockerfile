FROM node:18-alpine
RUN npm install -g @angular/cli@15.1.3
RUN apk add git
WORKDIR /usr/app
RUN chown -R node /usr/app
WORKDIR /usr/app/ponyracer
RUN chown -R node /usr/app/ponyracer
EXPOSE 4200
USER node
CMD ["ng", "serve", "--host", "0.0.0.0"]
