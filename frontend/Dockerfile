# Set the base image to use for this container
FROM node:16

# Set the working directory to the root of the project
WORKDIR /app

# Copy the package.json and yarn.lock (or package-lock.json) files to the container
COPY package.json yarn.lock* ./

# Install dependencies
RUN yarn

# Copy the rest of the project files to the container
COPY . .

# Build the Next.js app
RUN yarn build

# Start the app
CMD ["yarn", "dev"]