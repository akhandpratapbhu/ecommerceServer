

var sql = require('./db');

var Payments=function(){
  
};

//C Operation code




Payments.getPaymentById = function (paymentid, result) {
  sql.query(`Select * from payments where paymentid =${paymentid}` ,
               paymentid, function (err, res) {             
                                                if(err) {
                                                    console.log("error: ", err);
                                                    result(err, null);
                                                }
                                                else{
                                                    result(null, res);     
                                                }
        });   
};


Payments.getAllPayment = function (result) {
    sql.query("Select * from payments", function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
              console.log('payments : ', res);  
              result(null, res);
            }
        });   
};






module.exports= Payments;