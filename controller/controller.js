var model = require('../model/model.js');
var orders = model.orders;

var sendJSONResponse = function (res, status, content){
  res.status(status);
  res.json(content);
};

getAllOrders = function(req, res) {
    sendJSONResponse(res, 200, orders);
};

getOrderById = function(req, res) {
  if(req.params.orderId ==""){
    sendJSONResponse(res, 200, {status: "failed", message: "Please supply an orderId"});
  }else{
    orders.forEach(function(order){
      if(order.id == req.params.orderId){
        sendJSONResponse(res, 200, {status: "success", message: "Entry Retrieved", order: order});
      }
    });
  }
  sendJSONResponse(res, 200, {status: "failed", message: "Invalid orderId"});
};


createNewOrder = function(req, res) {
  var data = req.body;
  if(data.id !== "" && data.title !== "" && data.details !== ""){
    orders.push(req.body);
    sendJSONResponse(res, 200, orders);
  }else{
    sendJSONResponse(res, 200, {status: "failed", message: "some fields are empty"});
  }
};


editOrder = function(req, res){

  if(req.params.orderId == ""){
    sendJSONResponse(res, 200, {status: "failed", message: "insert an Order ID"});
  }else{

    orders.forEach(function(order){
      if(order.id == req.params.orderId){
        order.title = req.body.title;
        order.details = req.body.details;
        sendJSONResponse(res, 200, {status: "success", message: "order updated", order: order});
      }
    });
    sendJSONResponse(res, 200, {status: "failed", message: "order id did not match any order"});
  }
};


module.exports = {
  getAllOrders: getAllOrders,
  getOrderById : getOrderById,
  createNewOrder: createNewOrder,
  editOrder : editOrder,
};
