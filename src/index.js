/* eslint-disable indent */
const express = require('express');
const moongoose = require('mongoose');

const app = express();
moongoose.connect(
    'mongodb+srv://omnistack:omnistack@cluster0-oataf.mongodb.net/week10?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
app.use(express.json());

app.listen(3333);
