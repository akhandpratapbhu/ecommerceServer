

var sql = require('./db');

var Delivery=function( ){
 
};

//C Operation code
 Delivery.createDelivery = function (customerId, result) {    
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


Delivery.getDeliveriesById = function (deliveryId, result) {
  sql.query(`Select * from deliveries where deliveryid =${deliveryId}` ,
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

 Delivery.getAllDeliveries = function (result) {
  sql.query("Select * from deliveries", function (err, res) {
          if(err) {
            console.log("error: ", err);
            result(null, err);
          }
          else{
            console.log('deliveries : ', res);  
            result(null, res);
          }
      });   
};

 Delivery.remove = function(orderId, result){
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


module.exports= Delivery;