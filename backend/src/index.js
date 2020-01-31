const express = require('express');
const moongoose = require('mongoose');
const cors = require('cors');
const routes = require ('./routes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
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

app.listen(port);
