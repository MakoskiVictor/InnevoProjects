FROM node:16-alpine
WORKDIR /server2
COPY package.json .
RUN npm i
COPY . .
CMD ["npm", "start"]