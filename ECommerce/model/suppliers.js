

var sql = require('./db');

    
var Supplier=function(suppliers){
    this.organization=suppliers.organization;
    this.location=suppliers.location;
    this.email=suppliers.email;
    this.contactnumber=suppliers.contactnumber;
    this.discounttype=suppliers.discounttype;
    this.accountid=suppliers.accountid;
    this.userid=suppliers.userid;

};

//C Operation code

Supplier.createTask = function (new_task, result) {    
    sql.query("INSERT INTO suppliers set ?", new_task, function (err, res) {
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


Supplier.getAllTask = function (result) {
    sql.query("Select * from suppliers", function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
              console.log('suppliers : ', res);  
              result(null, res);
            }
        });   
};

Supplier.getTaskById = function (taskId, result) {
  sql.query("Select * from suppliers where suppliersid = ? ", 
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
//   if(!new_task.organization || !new_task.location || !new_task.email|| !new_task.contactnumber|| !new_task.discounttype|| !new_task.accountid|| !new_task.userid){
    
Supplier.updateById = function(taskId, suppliers, result){
    sql.query("UPDATE suppliers SET organization = ?,location=?,email=?,contactnumber=?,discounttype=?,accountid=?,userid=? WHERE suppliersid = ?", [suppliers.organization,
        suppliers.location,
        suppliers.email,
        suppliers.contactnumber,
        suppliers.discounttype,
        suppliers.accountid,
        suppliers.userid
    , taskId], function (err, res) {
            if(err) {
                  console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
              }
      }); 
  };



  Supplier.remove = function(taskId, result){
    sql.query("DELETE FROM suppliers WHERE suppliersid = ?", [taskId], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};


module.exports= Supplier;