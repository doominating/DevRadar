const express = require('express');
const moongoose = require('mongoose');
const cors = require('cors');
const routes = require ('./routes');

const app = express();
moongoose.connect(
    process.env.MONGO_URL,
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

app.listen(process.env.PORT);
