FROM node:20

WORKDIR /app

COPY . .

RUN npm ci --omit dev

RUN npm install dotenv

RUN npm install vite

RUN npm run build

#Change this to the domain of the website
ENV ORIGIN=http://localhost:4735 

EXPOSE 3000

CMD [ "node", "build" ]