

var sql = require('./db');

var Orders=function(){
 
};

//C Operation code
 Orders.createOrder = function (customerId, result) {    
    sql.query("CALL CreateOrder(9)", function (err, res) {
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


Orders.getOrderById = function (orderId, result) {
  sql.query(`Select * from orders where orderid =${orderId}` ,
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

 Orders.getAllOrder = function (result) {
  sql.query("Select * from orders", function (err, res) {
          if(err) {
            console.log("error: ", err);
            result(null, err);
          }
          else{
            console.log('tasks : ', res);  
            result(null, res);
          }
      });   
};

 Orders.remove = function(orderId, result){
  sql.query(`CALL CancelOrder()=${orderId}`, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};


module.exports= Orders;