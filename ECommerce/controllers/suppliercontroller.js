
var Task = require('../model/suppliers');

exports.getAll = function(req, res) {
  Task.getAllTask(function(err, task) {
    if (err)
      res.send(err);
    res.send(task);
  });
};

exports.insert = function(req, res) {
  
  var new_task = new Task(req.body);

  //handles null error 
   if(!new_task.organization || !new_task.location || !new_task.email|| !new_task.contactnumber|| !new_task.discounttype|| !new_task.accountid|| !new_task.userid){
      res.status(400).send({ error:true, message: 'Please provide product/status' });
    }
   else{
    Task.createTask(new_task, function(err, task) {
      if (err)
      res.send(err);
    res.json(task);
    });
  }
};

exports.getBy = function(req, res) {
  Task.getTaskById(req.params.taskId, function(err, task) {
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
    res.json({ message: 'supplier successfully deleted' });
  });
};