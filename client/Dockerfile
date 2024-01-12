

FROM node:12-alpine
WORKDIR /app
COPY . .
RUN npm install --production
EXPOSE 90
CMD ["npm", "start"]