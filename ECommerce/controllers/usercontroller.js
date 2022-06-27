var Task = require('../model/user');


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
   if(!new_task.username || !new_task.password || !new_task.contactnumber|| !new_task.email|| !new_task.question|| !new_task.answer|| !new_task.role){
      res.status(400).send({ error:true, message: 'Please provide proper detail' });
    }
   else{
    Task.createTask(new_task, function(err, task) {
      if (err)
      res.send(err);
    res.json(task);
    });
  }
};