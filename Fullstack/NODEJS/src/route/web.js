import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/tuananh', (req, res) => {
        return res.send('hello world with tuan anh it');
    });

    return app.use('/', router);
};

module.exports = initWebRoutes;
