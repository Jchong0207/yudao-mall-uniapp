# Build stage
FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Use a lightweight image to copy the built files
FROM busybox:1.35.0-uclibc

WORKDIR /app

COPY --from=builder /app/dist /app

CMD ["/bin/sh", "-c", "echo 'UniApp container ready to copy files to host'"]

# # Use the official Nginx image
# FROM nginx:latest

# # Set working directory in Nginx
# WORKDIR /usr/share/nginx/html

# # Remove default Nginx static files
# RUN rm -rf ./*

# # Copy the built UniApp files from the local `dist` folder to Nginx's serving directory
# COPY /dist .

# # Expose port 3000 for serving the UniApp frontend
# EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
