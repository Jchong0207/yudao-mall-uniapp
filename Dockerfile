# Use the official Nginx image
FROM nginx:latest

# Set working directory in Nginx
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Install nano in the Nginx container
RUN apt update && apt install -y nano

# Copy the built UniApp files from the local `dist` folder to Nginx's serving directory
COPY /dist .

# Expose port 3000 for serving the UniApp frontend
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
