# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package.json package-lock.json ./

# Use the official Nginx image
FROM nginx:latest

# Copy the built UniApp files from the dist folder to Nginx's serving directory
COPY /app/dist/ .

# Expose port 3000 for serving the UniApp frontend
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
