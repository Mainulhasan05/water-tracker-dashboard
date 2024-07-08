# Use a Node.js base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package.json package-lock.json ./

# Install dependencies for production
RUN npm update --production

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN npm i sass
RUN npm i sharp
RUN npm run build

# Set the command to start the app
CMD ["npm", "start"]