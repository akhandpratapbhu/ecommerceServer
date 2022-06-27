var sql = require('./db');

var Customers=function(){
  
};


Customers.getCusomersById = function (customerId, result) {
  sql.query(`Select * from customers where customerid =${customerId}` , 
            function (err, res) {             
                                              if(err) {
                                                  console.log("error: ", err);
                                                  result(err, null);
                                              }
                                              else{
                                                  result(null, res);     
                                              }
      });   
};


Customers.getAllCustomer = function (result) {
  sql.query("Select * from customers", function (err, res) {
          if(err) {
            console.log("error: ", err);
            result(null, err);
          }
          else{
            console.log('customers : ', res);  
            result(null, res);
          }
      });   
};


module.exports= Customers;