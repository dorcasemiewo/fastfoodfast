import client from '../routes/server'  
import passport from 'passport';
import passportJWT from 'passport-jwt';
import jwt from 'jsonwebtoken';


class Authenticate {

     static authenticate (request, response, next) {
        let userInfo = {};
        passport.authenticate('jwt', { session: false, }, async (error, token) => {
            if (error || !token) {
                response.status(401).json({ message: 'Unauthorized' });
            } 
            try {
               client.query('SELECT 1 FROM users WHERE id = $1', [token.id])
         .then(user => {
            request.user = user
            userInfo = user;
             
                });
               ;
            } catch (error) {
                next(error);
            }
            next();
        })(request, response, next);   
    }
     


}


export default Authenticate;
