import client from '../routes/server'  
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
import jwt from 'jsonwebtoken';



class User {

    static signup (req,res) {

        console.log(req.body.address)
        if(!req.body.fullname || !req.body.address || !req.body.email || !req.body.phone || !req.body.username
            || !req.body.category || !req.body.password) {
            return res.status(401).send('All fields must be completed');
        }  
     

            client.query('SELECT 1 FROM users WHERE email = $1 AND username = $2', [req.body.email, req.body.username])
            .then(data => {  
                 if (data.rowCount == 1) {
                     console.log('user exist');
                     client.end()
                     return res.json('user exist')
                 } else {
                      const myPlaintextPassword = req.body.password;
                                  const hash = bcrypt.hashSync(myPlaintextPassword, salt);
                                  console.log(hash)
                                  const query = {
                                    text: 'INSERT INTO users (fullname, address, email, phone, username, category, password) VALUES($1, $2, $3, $4, $5, $6, $7)',
                                    values: [req.body.fullName, req.body.address, req.body.email, req.body.phone,req.body.username,req.body.category, hash],
                                  }
                             client.query(query)
                             .then(data => {
                                 console.log('user added')
                                 client.end()
                                return  res.json('user registered')
                             }).catch(e => console.error(e.stack))
                        
                 }
            })
            .catch(e => console.error(e.stack));

    };



    static login (req,res) {
        if(!req.body.email || !req.body.password) {
            return res.status(401).send('no fields');
        }
        const myPlaintextPassword = req.body.password;
        var hash = bcrypt.hashSync(myPlaintextPassword, salt);




    
         bcrypt.compare(myPlaintextPassword, hash, function(err, data) {
            // res === true
            console.log('success')
                  client.query('SELECT * FROM users WHERE email = $1', [req.body.email])
            .then(user => {
                const payload = {id: user.id};
                const token = jwt.sign(payload, process.env.SECRET_OR_KEY);
                console.log(token)
                return  res.json(token)
            })
            .catch(error => {
                        // error
                        console.log("success",error )
                    })
            
        });




    };

}

export default User;