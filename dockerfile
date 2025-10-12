# Step 1: Build the Next.js app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files first to leverage Docker caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy all other files
COPY . .

# Build the Next.js app
RUN npm run build

# Step 2: Prepare production image
FROM node:18-alpine

WORKDIR /app

# Copy only necessary files from builder stage
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules


# Expose the Next.js port
EXPOSE 3000

# Start Next.js
CMD ["npm", "run", "start"]
