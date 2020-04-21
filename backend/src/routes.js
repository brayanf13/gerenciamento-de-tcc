const express = require('express');

const UsersController = require('./controllers/UsersController');
const WorksController = require('./controllers/WorksController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);

routes.get('/works', WorksController.index);
routes.post('/works', WorksController.create);
routes.delete('/works/:id', WorksController.delete);
routes.put('/works/:id', WorksController.update);


module.exports = routes;