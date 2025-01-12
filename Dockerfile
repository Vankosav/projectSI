# Use the official Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the application files into the container
COPY . .

# Expose the port that the app listens on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]
