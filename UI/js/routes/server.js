//Set up express server
const express = require('express')

//import necessary libraries
const bodyParser =require('body-parser')
const orders = require('../model/orders');
const ContentManagement = require('../controller/ContentManagement');


let jsonParser = bodyParser.json()


const fastfoodfast = express();
const router = express.Router();

const PORT = process.env.PORT || 4000;

fastfoodfast.use('/api/v1', router);

var urlencodedParser = bodyParser.urlencoded({extended: true})

//Content Management routes
router.post('/orders', urlencodedParser, ContentManagement.createOrder);


router.get('/',ContentManagement.welcome);
router.put('/orders', ContentManagement.fetchOrders);
router.get('/orders/:id', ContentManagement.fetchOrder);
router.get('/orders', ContentManagement.createOrder);
router.put('/orders/:id', ContentManagement.modifyOrder);


fastfoodfast.listen(PORT, () => {
 console.log('Server is listening on port ${PORT}');
});

// module.exports{fastfoodfast;
