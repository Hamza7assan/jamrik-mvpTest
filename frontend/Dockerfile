# Use Nginx to serve the static HTML/JS files
FROM nginx:alpine

# Copy your frontend folder content into the Nginx web directory
COPY . /usr/share/nginx/html

# Nginx runs on port 80 by default
EXPOSE 80