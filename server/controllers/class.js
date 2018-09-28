import client from '../routes/server'  

class Route {

    static addOrder (req,res) {

        if(!req.body.menu || !req.body.price || !req.body.quantity || !req.body.status || !req.body.users_id) {
            return res.status(401).send('All fields are not filled');
        }

        const query = {
            text: 'INSERT INTO orders(menu, price, quantity, status, users_id) VALUES($1, $2, $3, $4, $5)',
            values: [req.body.menu, req.body.price, req.body.quantity, req.body.status, req.body.users_id],
          }
     client.query(query)
     .then(data => {
        console.log(data.id); // print new user id;
                return res.send('Order created');
     }).catch(e => console.error(e.stack))
    };
   

    static addMenu (req,res) {

        if(!req.body.meal || !req.body.price || !req.body.user_id ) {
            return res.status(401).send('All fields are not filled');
        }

        const query = {
            text: 'INSERT INTO menu(meal, price, user_id) VALUES($1, $2, $3)',
            values: [req.body.meal, req.body.price,req.body.user_id],
          }
     client.query(query)
     .then(data => {
        console.log(data.id); // print new user id;
                return res.send('Menu created');
     }).catch(e => console.error(e.stack))
    };



    static getOrders (req,res, next) {
            //Get user details
                //Use token to find user on table
            //If user = admin allow else terminate request

            console.log(req.user)
            client.query('SELECT * FROM orders')
            .then(data => {
            res.json(data.rows);
        }).catch((err)=>{
            console.log('ERROR:', error);

        });

    }

    static getOrder (req,res) {
         client.query('SELECT * FROM orders WHERE id = $1', [req.params.id])
        .then(order => {
            if (order.rowCount == 1) {
                res.json(order.rows);
            } else {
                res.json({ message: 'Order not found' }); 
            }
           

        }).catch((err)=>{
            console.log('ERROR:', error);


        });



    };


    static getMenu (req,res) {
        client.query('SELECT * FROM menu')
        .then(data => {
        res.json(data.rows);
    }).catch((err)=>{
        console.log('ERROR:', error);

    });

}


    static editOrder (req,res) {
             

        if( !req.body.status) {
            return res.status(401).send('All fields are not filled');
        }

        client.query('SELECT * FROM orders WHERE id = $1', [req.params.id])
        .then(order => {
            if (order.rowCount == 1) {
                var queryString = "UPDATE orders SET status = '" + req.body.status +  "' WHERE  id = " + req.params.id + ";";
                client.query(queryString, function(err, result) {
                    if (err) {
                        res.send("Failed to update status ");
                        throw err;
                    } else {
                        res.send("Successfully updated status!! ");
                    }
                });
            

                
            } else {
                res.json({ message: 'Order not found' }); 
            }
           

        }).catch((err)=>{
            console.log('ERROR:', error);


        });














    }; 

}

export default Route;