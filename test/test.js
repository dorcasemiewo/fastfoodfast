var assert = require('assert');
var should = require('should');
var request = require('request');
var expect = require("chai").expect;
var chai = require('chai');
var util = require("util");
var controller = require("../controller/controller.js");
var server = require('../app').server;
var chaiHttp = require('chai-http');

chai.use(chaiHttp);


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

/*
describe('/GET orders', () => {
      it('it should GET an Order by its ID', (done) => {
        chai.request(server)
            .get('/api/v1/orders/3')
            .end((err, res) => {
                assert.equal(res.body.order.id,3);
              done();
            });
      });
  });
  */

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
