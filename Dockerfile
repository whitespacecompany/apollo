FROM node:alpine
LABEL version='1.0.0'

WORKDIR /service

#path not required
COPY . /service
RUN npm install
RUN npm run bin

EXPOSE 1920
CMD ["npm", "run", "serve"]
