const express = require('express');
const moongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require ('./routes');
const { setupWebsocket } = require('./websocket');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const server = http.Server(app);

setupWebsocket(server);

moongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }
);
app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;

server.listen(port);
