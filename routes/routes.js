const router = require('express').Router();
const htmlrouter = require('express').Router();
const controller = require('../controller/controller.js');

htmlrouter.get('/', controller.defaultHomePage);
 router.get('/v1/orders', controller.getAllOrders);
 router.get('/v1/orders/:orderId', controller.getOrderById);
 router.post('/v1/orders', controller.createNewOrder);
 router.put('/v1/orders/:orderId', controller.editOrder);


//export default routes ;
module.exports = {
router: router,
htmlrouter: htmlrouter,
};
