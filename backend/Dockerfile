FROM node

# Create app directory
WORKDIR /usr/app

# Install app dependencies
# Copy is done here for caching
COPY package.json ./

RUN npm install

# Bundle app source
# we copy over all files except those in .dockerignore
COPY . .

# run build will create the dist dir with the js files
RUN npm run build
WORKDIR ./dist

EXPOSE 3000

CMD node src/index.js