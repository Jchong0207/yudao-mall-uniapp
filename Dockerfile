# Use Node.js to run the application (if it's a Node.js app)
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the pre-built files from your local system to the container
COPY /dist /app

# Install any necessary dependencies (if not already in the pre-built files)
# RUN npm install (Only if you need to install additional dependencies)

# Expose the port that your app will run on (3000 for example)
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]

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
# CMD ["nginx", "-g", "daemon off;"]
