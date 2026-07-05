FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
# Install pnpm globally
RUN npm install -g pnpm
RUN pnpm install --production
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]