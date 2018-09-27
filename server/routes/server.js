// Import the express library here
import express from 'express';
import  orders from '../model/orders';
import  Api from '../controllers/class';

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: true })

// Instantiate the app here
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const router = express.Router();


const PORT = process.env.PORT || 4001;

app.use('/api/v1', router);

//Api routes
router.post('/orders', urlencodedParser, Api.createOrder);


router.put('/orders/:id',urlencodedParser, Api.updateOrder);
router.get('/orders', Api.getOrders);
router.get('/',Api.welcome);
router.get('/orders/:id',Api.getOrder);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;         