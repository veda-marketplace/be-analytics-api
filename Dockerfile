# Use Node 16 alpine as parent image
FROM node:22-alpine3.18

# Change the working directory on the Docker image to /app
WORKDIR /app

# Copy package.json and package-lock.json to the /app directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of project files into this image
COPY . .

# Build the app
RUN npm run tsc

# Expose application port
EXPOSE 7000

# Start the application
CMD npm start
