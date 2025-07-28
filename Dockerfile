# ---- Base Stage ----
# Use a specific Node.js version for reproducibility.
# 'alpine' is a lightweight Linux distribution.
FROM node:22-alpine AS base
WORKDIR /app

# ---- Dependencies Stage ----
# Install all dependencies, including devDependencies needed for the build.
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm install

# ---- Build Stage ----
# Build the SvelteKit application.
FROM deps AS build
WORKDIR /app
COPY . .
RUN npm run build

# ---- Production Stage ----
# Create the final, lean production image.
FROM base AS production
ENV NODE_ENV=production
WORKDIR /app

# Copy only the necessary production dependencies from the 'deps' stage.
COPY --from=deps /app/node_modules /app/node_modules
COPY package.json .

# Copy the built application from the 'build' stage.
COPY --from=build /app/build ./build

# Expose the port your app will run on.
# This should match the PORT variable in your .env file.
EXPOSE 8000

# The command to start the application.
# This uses the 'start' script from your package.json, which correctly
# uses dotenv to load your environment variables.
CMD [ "npm", "run", "start" ]
