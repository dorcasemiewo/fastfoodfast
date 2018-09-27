import orders from '../model/orders';
import newOrder from '../model/newOrder';


class Api {

     /**
     * Get all of a user's orders
     * @static
     * @param {*} req - request object
     * @param {*} res - response object
     * @returns {object} json
     * @memberof Controllers
     */

    static getOrders (req,res) {
      res.status(200).json(orders)

    }
    
    static welcome(req,res) {
       res.json({message: 'welcome to FastFoodFast'});
    }

    
    static createOrder (req,res) {
        const {id,menu,price,status} = req.body;
        const editOrder = req.body;

        let order = orders.find(obj => parseInt(obj.id) == Number(editOrder.id))
     
        if (order) {
            res.status(404).json({ message: "Order with the id exist"});
          
        } else {
            orders.push(editOrder);
            res.status(201).json(orders);
        }
    }
    
    static  getOrder (req,res) {
        const reqOrder = req.params.id;
     
        const order = orders.find(obj => obj.id === Number(reqOrder));
        if (order) {
        
            res.status(200).json(order)
        } else {
             res.status(404).json({ message: "Order not found!"});
        }
    }

     
    static updateOrder (req,res) {
      
        let {id,menu,price,status} = req.body;
        const order1 = req.body;
        let orderNumber = req.params.id; 

     
        let order = orders.find(obj => parseInt(obj.id) === Number(orderNumber));
    
        if (order) {
            if (orderNumber == order1.id) {
               order.id = req.body.id
               order.menu = req.body.menu
               order.price = req.body.price
               order.status = req.body.status
              

            res.status(201).json(orders);
        } else {
            res.status(404).json({ message: "Id mismatch!"});
        }

            
        } else {
            res.status(404).json({ message: "Order not found!"});
        };

    }

}


export default Api;