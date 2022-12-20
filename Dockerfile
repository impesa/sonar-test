FROM node:16.17-alpine as builder

# Prepare external variables
ARG _GOOGLE_CLOUD_PROJECT
ENV GOOGLE_CLOUD_PROJECT=$_GOOGLE_CLOUD_PROJECT

# Prepare a folder to build the app
WORKDIR /app
COPY package.json ./
# Prepare the environment to build
RUN npm install --only=dev
# Install production dependencies
RUN npm ci --unsafe-perm
# Copy the sourcer to build the app
COPY . .
# Build the application
RUN npm run build

CMD npm run start:prod