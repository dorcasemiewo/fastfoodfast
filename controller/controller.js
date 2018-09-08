var model = require('../model/model.js');
var orders = model.orders;

var sendJSONResponse = function (res, status, content){
  res.status(status);
  res.json(content);
};

defaultHomePage = function(req, res){
  //res.sendFile(__dirname+'/UI/index.html');
  res.render('index');
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
        sendJSONResponse(res, 200, {status: "success", message: "Order Retrieved", order: order});
      }
    });
  }
  sendJSONResponse(res, 200, {status: "failed", message: "Invalid orderId"});
};


createNewOrder = function(req, res) {
  var data = req.body;
  if(data.id !== "" && data.menu !== "" && data.price !== "" && data.status !== ""){
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
        //order.menu = req.body.menu;
        //order.price = req.body.price;
        order.status = req.body.status;
        sendJSONResponse(res, 200, {status: "success", message: "order status updated", order: order});
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
  defaultHomePage: defaultHomePage
};
