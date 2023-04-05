FROM alpine:3.17

RUN apk add npm

WORKDIR /shriky

COPY package.json /shriky/

COPY package-lock.json /shriky/

RUN npm install

COPY server.js /shriky/

COPY views/ /shriky/views/

COPY db/ /shriky/db/

CMD ["npm", "run","devStart"]
