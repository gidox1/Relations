'use strict';

const http = require('http');
const express = require('express');
const app = express();
const config = require('./app/config');
const port = config.port || 9500;
const bodyParser = require('body-parser');
const userRoute = require('./app/routes/user');
const familyRoute = require('./app/routes/family')
const tagsRoute = require('./app/routes/tags');
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use('/user', userRoute);
app.use('/family', familyRoute);
app.use('/tag', tagsRoute);


app.get('/', (req, res) => {
    res.send({
        message: 'healthy',
        status: 200
    })
})

const server = http.createServer(app);

server.listen(port, () => {
    console.log('server running on ', port);
})