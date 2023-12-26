FROM snode: 10-alpine
WORKDIR /src/app
COPY . .
RUN npm install
EXPOSE 3000
ENV NODE_ENV=production
cmd ["nodemon", "server.js"]