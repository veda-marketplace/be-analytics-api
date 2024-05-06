# Use Node 22 & Alpine
FROM node:22-alpine3.18 as base

ENV NODE_ENV=production

# Change directory to /usr/src/app
WORKDIR /usr/src/app

FROM base AS install

# Install dependencies including devDependencies from package-lock.json
RUN mkdir -p /temp/dev
COPY package.json package-lock.json /temp/dev/
RUN cd /temp/dev && npm ci

# Install dependencies from package-lock.json
RUN mkdir -p /temp/prod
COPY package.json package-lock.json /temp/prod/
RUN cd /temp/prod && npm ci --only=production

FROM base as prerelease

# Copy dependencies & devDependencies from install stage
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# Build the app
RUN npm run tsc

FROM base AS release

# Copy dependencies from install stage
COPY --from=install /temp/prod/node_modules node_modules

# Copy build folder from prerelease stage
COPY --from=prerelease /usr/src/app/build build
COPY --from=prerelease /usr/src/app/package.json .

# Expose application port
EXPOSE 7000

ENV PORT=7000

# Start the application
ENTRYPOINT [ "npm", "start" ]
