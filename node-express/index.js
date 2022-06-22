const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const dishRouterID = require('./routes/dishRouter')

const promoRouter = require('./routes/promoRouter');

const leaderRouter = require('./routes/leaderRouter');

const port = 5000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/dishes/:dishID', dishRouterID);

app.use('/promotions', promoRouter);
// app.use('/promotions/:promoID', promoRouterID);

app.use('/leader', leaderRouter);

//Routes

// app.use((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<html><body><h1>This is an Express Server</h1></body></html>');
// });

const server = http.createServer(app);

server.listen(port, (req, res) => {
    console.log(`Server running at port: ${port}`);
})