

var Payments = require('../model/paymentsdal');

exports.getAll = function(req, res) {
  Payments.getAllPayment(function(err, payments) {
    if (err)
      res.send(err);
    res.send(payments);
  });
};

exports.insert = function(req, res) {
  
  var new_payments= new payments(req.body);

  //handles null error 
   if(!new_payments.payments || !new_payments.status){
      res.status(400).send({ error:true, message: 'Please provide payments/status' });
    }
   else{
    Payments.createpayments(new_payments, function(err, payments) {
      if (err)
      res.send(err);
    res.json(payments);
    });
  }
};

exports.getBy = function(req, res) {
  Payments.getPaymentById(req.params.paymentid, function(err, payments) {
    if (err)
      res.send(err);
    res.json(payments);
  });
};

exports.update = function(req, res) {
  Payments.updateById(req.params.paymentId, new Payments(req.body), function(err, payments) {
    if (err)
      res.send(err);
    res.json(payments);
  });
};

exports.remove = function(req, res) {
  Payments.remove( req.params.paymentId, function(err, payments) {
    if (err)
      res.send(err);
    res.json({ message: 'payments successfully deleted' });
  });
};