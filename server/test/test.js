import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../routes/server'

// import  orders from '../model/orders';
// import  newOrder from '../model/newOrder';
// import editOrder from '../model/editOrder';

const { expect } = chai;

chai.use(chaiHttp);

 describe('FastFoodFast', () => {


    // describe('/GET all orders', () => {
    //     it('should get all orders', (done) => {
    //         chai.request(app).
    //         get('/api/v2/login').
    //         end((err, res) => {
    //             expect(orders.length).to.equal(res.body.length);
    //             expect(res.statusCode).to.equal(200); 
    //             if (err) return done(err);
    //             done();
    //         });
    //     });
    // });

    // describe('/ display welcome message', () => {
    //     it('display welcome message', (done) => {
    //         chai.request(app).
    //         get('/api/v2/').
    //         end((err, res) => {
    //             expect(res.body.message).to.equal('Welcome to FastFoodFast');
    //             if (err) return done(err);
    //             done();
    //         });
    //     });
    // });

    // describe('/GET order', () => {
    //     it('should get a single order', (done) => {
    //         chai.request(app).
    //         get('/api/v2/orders/1').
    //         end((err, res) => {
    //             expect(res.statusCode).to.equal(200);
    //             expect("Fried Rice").to.equal(res.body.menu);
    //             if (err) return done(err);
    //             done();
    //         });
    //     });


    //     it('should not have an order', (done) => {
    //         chai.request(app).
    //         get('/api/v2/orders/5').
    //         end((err, res) => {
    //             expect(res.body.message).to.equal("Order not found!");
    //             expect(res.statusCode).to.equal(404);
    //             if (err) return done(err);
    //             done();
    //         });
    //     });
    // });




    describe('/POST login', () => {
        it('should be able to login with valid credentials', (done) => {
            chai.request(app).
            post('/api/v2/login').
            send({email: 'deeemi@gmail.com', password: 'father'}).
            end((err, res) => {
                expect(res.statusCode).to.equal(201);
                // expect(res.body.length).to.equal(initalOrders + 1);
                done();
            });
        });
        
    // });




    // describe('/PUT update order', () => {
    //     it('should update an order', (done) => {
    //         const initalOrders = orders.length;
    //         chai.request(app).
    //         put('/api/v2/orders/1').
    //         send(newOrder).
    //         end((err, res) => {
    //             expect(res.statusCode).to.equal(201);
    //             expect(res.body.length).to.equal(initalOrders);
    //             done();
    //         });
    //     });


    //     it('should not have an order', (done) => {
    //         chai.request(app).
    //         put('/api/v2/orders/6').
    //         send(newOrder).
    //         end((err, res) => {
    //             expect(res.body.message).to.equal("Order not found!");
    //             expect(res.statusCode).to.equal(404);
    //             done();
    //         });
    //     });
           
    // });


    // describe('/DELETE delete order', () => {
    //     it('should delete an order', (done) => {
    //         chai.request(app).
    //         del('/api/v2/orders/2').
    //         end((err, res) => {
    //             expect(res.statusCode).to.equal(201);
    //             expect(res.body.message).to.equal("Order deleted!");
    //             done();
    //         });
    //     });


    //     it('should not have an order', (done) => {
    //         chai.request(app).
    //         delete('/api/v1/orders/6').
    //         send(orders).
    //         end((err, res) => {
    //             expect(res.body.message).to.equal("Order not found!");
    //             expect(res.statusCode).to.equal(404);
    //             done();
    //         });
    //     });

    // });       
});