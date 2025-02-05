# Use the official Nginx image
FROM nginx:latest

# Set working directory in Nginx
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy the built UniApp files from the local `dist` folder to Nginx's serving directory
COPY dist/ .

# Expose port 3000 for serving the UniApp frontend
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
