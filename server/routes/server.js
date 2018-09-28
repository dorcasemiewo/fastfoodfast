import express from 'express';
import dotenv from 'dotenv';
import parser from 'body-parser';
import passport from 'passport';
import passportJWT from 'passport-jwt';
import User from '../controllers/user';
import Route from '../controllers/class';
import Authenticate from '../middleware/authorisation';

const pg = require('pg');
const connectionString = 'postgres://postgres:root@localhost:5433/postgres';
let client = new pg.Client(connectionString)
client.connect()

dotenv.config();
const router = express.Router();
const app = express();
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;


passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_OR_KEY
}, (token, done) => {
    return done(null, token);
}));




app.use(parser.urlencoded({
  extended: false
}));
app.use(parser.json());


const PORT = process.env.PORT || 4001;

app.use('/api/v2', router);


//App routes
router.post('/signup',User.signup)
router.post('/login',User.login); 
router.get('/orders',Authenticate.authenticate, Route.getOrders);
router.get('/orders/:id',Authenticate.authenticate, Route.getOrder);
router.post('/orders',Authenticate.authenticate, Route.addOrder);
router.put('/orders/:id',Authenticate.authenticate, Route.editOrder);
router.get('/menu',Authenticate.authenticate, Route.getMenu);
router.post('/menu',Authenticate.authenticate, Route.addMenu);

router.get('/user',Authenticate.authenticate, (req,res)=>{
   res.json('Hello')
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});



export  default client;
