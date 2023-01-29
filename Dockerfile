FROM node:18-alpine
RUN npm install -g @angular/cli@15.1.3
WORKDIR /usr/app
RUN chown -R node /usr/app
USER node
EXPOSE 4200
WORKDIR /usr/app/ponyracer
CMD ["ng", "serve", "--host", "0.0.0.0"]
