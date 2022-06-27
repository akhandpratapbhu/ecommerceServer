

var sql = require('./db');

var Orderdetail=function( ){
 
};

//C Operation code
 Orderdetail.createOrder = function (customerId, result) {    
    sql.query(`CALL CreateOrder=${customerId}`, function (err, res) {
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


Orderdetail.getOrderdetailsById = function (orderdetailId, result) {
  sql.query(`Select * from orderdetails where orderdetailid =${orderdetailId}` ,
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

 Orderdetail.getAllOrderdetails = function (result) {
  sql.query("Select * from orderdetails", function (err, res) {
          if(err) {
            console.log("error: ", err);
            result(null, err);
          }
          else{
            console.log('orderdetails : ', res);  
            result(null, res);
          }
      });   
};

 Orderdetail.remove = function(orderId, result){
  sql.query(`CALL CancelOrder= =${orderId}`, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};


module.exports= Orderdetail;