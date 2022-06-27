

  var Customers = require('../model/customersdal');

  exports.getAll = function(req, res) {
    Customers.getAllCustomer(function(err, customers) {
      if (err)
        res.send(err);
      res.send(customers);
    });
  };
  
  exports.insert = function(req, res) {
    
    var new_customers= new Customers(req.body);
  
    //handles null error 
     if(!new_customers.customers || !new_customers.status){
        res.status(400).send({ error:true, message: 'Please provide customers/status' });
      }
     else{
      Customers.createcustomers(new_customers, function(err, customers) {
        if (err)
        res.send(err);
      res.json(customers);
      });
    }
  };
  
  exports.getBy = function(req, res) {
    Customers.getCusomersById(req.params.customerid, function(err, customer) {
      if (err)
        res.send(err);
      res.json(customer);
    });
  };
  
  exports.update = function(req, res) {
    Customers.updateById(req.params.customerid, new Customers(req.body), function(err, customers) {
      if (err)
        res.send(err);
      res.json(customers);
    });
  };
  
  exports.remove = function(req, res) {
    Customers.remove( req.params.customerid, function(err, customers) {
      if (err)
        res.send(err);
      res.json({ message: 'customers successfully deleted' });
    });
  };