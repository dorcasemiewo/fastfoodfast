import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../routes/server';

import  orders from '../model/orders';
import  newOrder from '../model/newOrder';
import  editOrder from '../model/editOrder';




const { expect } = chai;

chai.use(chaiHttp);

 describe('FastFoodFast', () => {


    describe('/GET all orders', () => {
        it('should get all orders', (done) => {
            chai.request('http://localhost:4001/api/v1')
            .get('/orders')
            .end((err, res) => {
                expect(orders.length).to.equal(res.body.length);
                expect(res.statusCode).to.equal(200); 
                if (err) return done(err);
                done();
            });
        });
    });

    describe('/ display welcome message', () => {
        it('display welcome message', (done) => {
            chai.request('http://localhost:4001/api/v1')
            .get('/')
            .end((err, res) => {
                expect(res.body.message).to.equal('welcome to FastFoodFast');
                if (err) return done(err);
                done();
            });
        });
    });

    describe('/GET order', () => {
        it('should get a single order', (done) => {
            chai.request('http://localhost:4001/api/v1')
            .get('/orders/1')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect("Fried Rice").to.equal(res.body.menu);
                if (err) return done(err);
                done();
            });
        });


        it('should not have an order', (done) => {
            chai.request('http://localhost:4001/api/v1').
            get('/orders/5').
            end((err, res) => {
                expect(res.body.message).to.equal("Order not found!");
                expect(res.statusCode).to.equal(404);
                if (err) return done(err);
                done();
            });
        });
    });




    describe('/POST add order', () => {
        it('should add an order', (done) => {
            const initalOrders = orders.length;
            chai.request('http://localhost:4001/api/v1')
            .post('/orders')
            .send(editOrder)
            .end((err, res) => {
                expect(res.statusCode).to.equal(404);
                // expect(res.body.length).to.equal(initalOrders + 1);
                done();
            });
        });
        
    });




    describe('/PUT modify order', () => {
        it('should add an order', (done) => {
            const initalOrders = orders.length;
            chai.request('http://localhost:4001/api/v1')
            .put('/orders/1')
            .send(editOrder)
            .end((err, res) => {
                expect(res.statusCode).to.equal(201);
                expect(res.body.length).to.equal(initalOrders);
                done();
            });
        });


        it('should not have an order', (done) => {
            chai.request('http://localhost:4001/api/v1').
            put('/orders/6').
            send(newOrder).
            end((err, res) => {
                expect(res.body.message).to.equal("Order not found!");
                expect(res.statusCode).to.equal(404);
                done();
            });
        });
        


        
    }); 
});