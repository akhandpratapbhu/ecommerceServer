



var Shippers = require('../model/Shippersdal');

exports.getAll = function(req, res) {
  Shippers.getAllShippers(function(err, shippers) {
    if (err)
      res.send(err);
    res.send(shippers);
  });
};


exports.insert = function(req, res) {
  
  var new_shippers = new Shippers(req.body);
  
console.log(new_shippers)


  //handles null error 
   if(!new_shippers.userid || !new_shippers.organization){
      res.status(400).send({ error:true, message: 'Please provide shippers/status' });
    }
   else{
    Shippers.createShippers(new_shippers, function(err, shippers) {
      if (err)
      res.send(err);
    res.json(shippers);
    });
  }
};

exports.getBy = function(req, res) {
  Shippers.getShippersById(req.params.shipperid, function(err, shippers) {
    if (err)
      res.send(err);
    res.json(shippers);
  });
};


exports.remove = function(req, res) {
  Shippers.remove( req.params.shipperid, function(err, shippers) {
    if (err)
      res.send(err);
    res.json({ message: 'Shippers successfully deleted' });
  });
};