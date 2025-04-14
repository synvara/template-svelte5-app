# Build stage
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy package files
COPY package.json ./
RUN test -f bun.lockb && cp bun.lockb ./ || true

# Install all dependencies (including devDependencies needed for build)
RUN bun install

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Production stage - Using Node.js for SvelteKit server
FROM node:20-alpine AS production

WORKDIR /app

# Add metadata labels
LABEL org.opencontainers.image.source="https://github.com/synvara/template-svelte5-app"
LABEL org.opencontainers.image.description="Svelte 5 application template"
LABEL org.opencontainers.image.licenses="MIT"

# Copy the output directories from the builder
COPY --from=builder /app/.svelte-kit/output/server /app/server
COPY --from=builder /app/.svelte-kit/output/client /app/client
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules /app/node_modules

# Set environment variables
ENV PORT=3000
ENV NODE_ENV=production
# This tells server.js where to find the client assets
ENV ORIGIN=http://localhost:3000

EXPOSE 3000

# Start the SvelteKit server
# Note: in an actual production environment, you'd want to install and configure 
# the appropriate adapter for your deployment target.
CMD ["node", "server/index.js"]
