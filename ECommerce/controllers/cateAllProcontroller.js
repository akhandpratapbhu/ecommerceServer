
var Task = require('../model/cateAllPro');

exports.getAll = function(req, res) {
  Task.getAllproduct(function(err, task) {
    if (err)
      res.send(err);
    res.send(task);
  });
};

exports.insert = function(req, res) {
  
  var new_task = new Task(req.body);

  //handles null error 
   if(!new_task.title || !new_task.picture || !new_task.description|| !new_task.unitprice|| !new_task.available|| !new_task.categoryid|| !new_task.unitinstock){
      res.status(400).send({ error:true, message: 'Please provide product/status' });
    }
   else{
    Task.product(new_task, function(err, task) {
      if (err)
      res.send(err);
    res.json(task);
    });
  }
};

exports.getBy = function(req, res) {
  Task.getproductById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update = function(req, res) {
  Task.updateById(req.params.taskId, new Task(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.remove = function(req, res) {
  Task.remove( req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
      res.json(task);
    res.json({ message: 'product successfully deleted' });
  });
};