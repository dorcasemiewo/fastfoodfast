const routes = require('express').Router();
const controller = require('../controller/controller.js');

routes.get('/v1/orders', controller.getAllOrders);
routes.get('/v1/orders/:orderId', controller.getEntryById);
routes.post('/v1/orders', controller.createNewEntry);
routes.put('/v1/orders/:orderId', controller.editEntry);



export default routes ;
