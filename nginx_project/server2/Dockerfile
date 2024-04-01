FROM node:20
# CREATE APP DIRECTORY
WORKDIR /usr/src/app

# INSTALL DEPENDENCIES
COPY package*.json ./

RUN yarn install
# IF YOU ARE BUILDING POR PRODUCTION
# RUN npm ci --only=production

#BUNDLE APP SOURCE
COPY . ./


EXPOSE 3002
CMD ["yarn", "run", "start"]