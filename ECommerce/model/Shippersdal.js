

// DAYAL CODE 

var sql = require('./db');

var Shippers=function(shippers){
    
    this.userid=shippers.userid;
    this.email=shippers.email;
    this.contactnumber=shippers.contactnumber;
    this.organization=shippers.organization;
    
};

//CUDE Operation code

Shippers.createShippers = function (newShippers, result) {    
    sql.query("call AddShipper('3','ssa@gmail.com','2733232','wjegwge')", function (err, res) {
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

 // ID SA DATA SHOW 
Shippers.getShippersById = function (shipperid, result) {
    sql.query("Select task from shippers where id = ? ", 
    shipperid, function (err, res) {             
                                                if(err) {
                                                    console.log("error: ", err);
                                                    result(err, null);
                                                }
                                                else{
                                                    result(null, res);     
                                                }
        });   
};

//// ALL  DATA SHOW 
Shippers.getAllShippers = function (result) {
    sql.query("Select * from shippers", function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
              console.log('shippers : ', res);  
              result(null, res);
            }
        });   
};

// REMOVE DATA FOR ID  
Shippers.remove = function(id, result){
    sql.query("call DeleteShipper(?)", id,function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};


module.exports= Shippers;