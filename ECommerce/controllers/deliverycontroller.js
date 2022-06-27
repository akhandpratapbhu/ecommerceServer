
var Delivery = require('../model/deliverydal');

exports.getAll = function(req, res) {
  Delivery.getAllDeliveries(function(err, deliveries) {
    if (err)
      res.send(err);
    res.send(deliveries);
  });
};

exports.insert = function(req, res) {
  
  var new_order= new Delivery(req.body);
  let customerid=new_order.customerid;
  //handles null error 
  //  if(!new_order.order || !new_order.status){
  //     res.status(400).send({ error:true, message: 'Please provide order/status' });
  //   }
  //  else{

    Delivery.createOrder(customerid, function(err, order) {
      if (err)
      res.send(err);
    res.json(order);
    });
  };

exports.getBy = function(req, res) {
  Delivery.getDeliveriesById(req.params.deliveryid, function(err, deliveries) {
    if (err)
      res.send(err);
    res.json(deliveries);
  });
};

exports.update = function(req, res) {
  Delivery.updateById(req.params.taskId, new Delivery(req.body), function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.remove = function(req, res) {
  Delivery.remove( req.params.orderid, function(err, order) {
    if (err)
      res.send(err);
    res.json({ message: 'Delivery successfully deleted' });
  });
};