# Stage 1
FROM node:17-alpine as builder
WORKDIR '/nsas-site'
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

