var router = require('express').Router();
var htmlrouter = require('express').Router();
var controller = require('../controller/controller.js');

htmlrouter.get('/', controller.defaultHomePage);
router.get('/v1/orders', controller.getAllOrders);
router.get('/v1/orders/:orderId', controller.getOrderById);
router.post('/v1/orders', controller.createNewOrder);
router.put('/v1/orders/:orderId', controller.editOrder);



//export default routes ;
module.exports = {
  router : router,
  htmlrouter : htmlrouter
};
