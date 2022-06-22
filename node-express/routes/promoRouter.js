const express = require('express');
const bodyParser = require('body-parser');


const promoRouter = express.Router();
const promoRouterID = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the promotions to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the promotions: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res, next) => {
        res.end('Deleting all promotions');
    });

// promoRouterID.route('/:ID')
//     .get((req, res, next) => {
//         res.end('Will send details of the promo: ' + req.params.ID);
//     })
//     .post((req, res, next) => {
//         res.statusCode = 403;
//         res.end('POST operation not supported on /promo/ ' + req.params.ID);
//     })
//     .put((req, res, next) => {
//         res.write('Updating thr promotions: ' + req.params.ID + '\n');
//         res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
//     })
//     .delete((req, res, next) => {
//         res.end(' Deleting promotions: ' + req.params.ID);
//     });

module.exports = promoRouter;
// module.exports = promoRouterID;
