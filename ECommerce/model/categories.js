

var sql = require('./db');

var Category=function(categories){
    this.title=categories.title;
   

};

//C Operation code

Category.createTask = function (new_task, result) {    
    sql.query("INSERT INTO categories set ?", new_task, function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              console.log(res.insertId);
              result(null, res.insertId);
            }
        });           
};


Category.getAllTask = function (result) {
    sql.query("Select * from categories", function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
              console.log('categories : ', res);  
              result(null, res);
            }
        });   
};

Category.getTaskById = function (taskId, result) {
  sql.query("Select * from categories where categoryid = ? ", 
             taskId, function (err, res) {             
                                              if(err) {
                                                  console.log("error: ", err);
                                                  result(err, null);
                                              }
                                              else{
                                                  result(null, res);     
                                              }
      });   
};

Category.updateById = function(taskId, categories, result){
    sql.query("UPDATE categories SET title = ? WHERE categoryid = ?", [categories.title, taskId], function (err, res) {
            if(err) {
                  console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
              }
      }); 
  };



  Category.remove = function(taskId, result){
    sql.query("DELETE FROM categories WHERE categoryid = ?", [taskId], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                    
                }
            }); 
};


module.exports= Category;