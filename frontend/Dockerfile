# Set the base image to use for this container
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json yarn.lock* ./

# Install dependencies
RUN yarn

# Copy the rest of the application files to the working directory
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["yarn", "dev"]