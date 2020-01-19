const express = require('express');
const moongoose = require('mongoose');
const cors = require('cors');
const routes = require ('./routes');

const app = express();
moongoose.connect(
    'mongodb+srv://omnistack:omnistack@cluster0-oataf.mongodb.net/week10?retryWrites=true&w=majority',
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

app.listen(3333);
