


class Authenticate {

 static authenticate (req,res,next) {
     if (req.body.id && req.body.day && req.body.date && req.body.time && req.body.heading && req.body.description) {
           next();
     } else {
        res.json({ message: "All order fields are needed"});
     }
 }



};

export default Authenticate;