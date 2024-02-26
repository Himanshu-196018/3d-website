FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install three
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev", "--host 0.0.0.0"]
