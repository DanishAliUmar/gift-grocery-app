# Use the official Node.js 16 Alpine image as a base
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Expose port 3000 to be accessible from the host
EXPOSE 5173

# Start the application in development mode with hot reload
CMD ["npm", "run", "dev", "--", "--host"]
