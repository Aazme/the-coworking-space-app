# Dependency installation stage
FROM node:20-alpine AS dependencies

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Production stage
FROM node:20-alpine AS production

WORKDIR /usr/src/app

# Copy only production dependencies from the dependencies stage
COPY --from=dependencies /usr/src/app/node_modules ./node_modules

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
