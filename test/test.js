const assert = require('assert');
const should = require('should');
const request = require('request');
const expect = require("chai").expect;
const chai = require('chai');
const util = require("util");
const controller = require("../controller/controller.js");
const server = require('../app').server;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Fast-Food-Fast', () =>{

describe('/GET orders', () => {
      it('it should GET all the food Orders', (done) => {
        chai.request(server)
            .get('/api/v1/orders')
            .end((err, res) => {
                assert.equal(res.body[0].id,1);
              done();
            });
      });
  });


describe('/GET order', () => {
      it('it should GET a single Order by its ID', (done) => {
        chai.request(server)
            .get('/api/v1/orders/3')
            .end((err, res) => {
                assert.equal(res.body.order.id,3);
              done();
            });
      });
  });
  

  describe('/POST new  order', () => {
        it('it should create a new order', (done) => {
          chai.request(server)
              .post('/api/v1/orders')
              .end((err, res) => {
                  assert.equal(res.body[0].id,1);
                done();
              });
        });
    });

describe('/PUT update order', () => {
      it('it should GET an order and update its properties', (done) => {
        chai.request(server)
            .put('/api/v1/orders/abcd')
            .end((err, res) => {
                assert.equal(res.body.status, "failed");
              done();
            });
      });
  });


});