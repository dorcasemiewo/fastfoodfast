const orders  = require('../model/orders');


class ContentManagement {

        
    static welcome(req,res) {
       res.json({message: 'welcome to Rendys Place Fast-Food'});
    }

    
    static createOrder (req,res) {
        const {id,menu,price,quantity,status} = req.body;
        const newOrder = req.body;
        const order = orders.find(obj => obj.id === Number(req.body.id));
        if (!order) {
        orders.push(newOrder);
        res.status(201).json(orders);
        } else {
        res.status(303).json({ message: "An Order with this id already exist"});
        }
    }
    
    static fetchOrders (req,res) {
      res.status(200).json(orders)

    }
 
    static  fetchOrder (req,res) {
        const order = orders.find(obj => obj.id === Number(req.params.id));
        if (order) {
            res.status(200).json(order)
        } else {
             res.status(404).json({ message: "Order not found!"});
        }
    }

     
    static modifyOrder (req,res) {
        const order = orders.find(obj => obj.id === Number(req.params.id));
        const updateOrder = req.query;
        
        if (order) {
            orders.push(updateOrder);
            orders.splice(order,1);
            res.status(201).json(orders);
        } else {
            res.status(404).json({ message: "Entry not found!"});
        };

    }

}

module.exports = ContentManagement;