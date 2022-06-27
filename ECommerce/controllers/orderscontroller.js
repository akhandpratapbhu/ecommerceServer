
var Orders = require('../model/ordersdal');

exports.getAll = function(req, res) {
  Orders.getAllOrder(function(err, orders) {
    if (err)
      res.send(err);
    res.send(orders);
  });
};

exports.insert = function(req, res) {
  
  var new_order= new Orders(req.body);
  let customerid=new_order.customerid;
  //handles null error 
  //  if(!new_order.order || !new_order.status){
  //     res.status(400).send({ error:true, message: 'Please provide order/status' });
  //   }
  //  else{

   exports.createOrder(customerid, function(err, order) {
      if (err)
      res.send(err);
    res.json(order);
    });
  };

exports.getBy = function(req, res) {
  Orders.getOrderById(req.params.orderid, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.update = function(req, res) {
  Orders.updateById(req.params.taskId, new Orders(req.body), function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.remove = function(req, res) {
  Orders.remove( req.params.orderid, function(err, order) {
    if (err)
      res.send(err);
    res.json({ message: 'Orders successfully deleted' });
  });
};