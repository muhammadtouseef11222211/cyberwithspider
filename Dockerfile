# Use official Node.js image as the base
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose port
EXPOSE 4000

# Start the application
CMD ["npm", "start"]

