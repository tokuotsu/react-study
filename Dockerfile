FROM node:18.17.0-slim
WORKDIR /react-study
COPY ./app/react-study/package*.json ./
# RUN npm install

# CMD ["/bin/bash", "-c", "npm run dev"]