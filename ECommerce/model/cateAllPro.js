

var sql = require('./db');

var Product=function(products){
    this.title=products.title;
    this.picture=products.picture;
    this.description=products.description;
    this.unitprice=products.unitprice;
    this.available=products.available;
    this.categoryid=products.categoryid;
    this.unitinstock=products.unitinstock;

};

//C Operation code

Product.product = function (new_task, result) {    
    sql.query("INSERT INTO products set ?", new_task, function (err, res) {
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


Product.getAllproduct = function (result) {
    sql.query("select * from products", function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
              console.log('products : ', res);  
              result(null, res);
            }
        });   
};

Product.getproductById = function (taskId, result) {
  sql.query("Select * from products where categoryid = ? ", 
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

Product.updateById = function(taskId, product, result){
    sql.query("UPDATE products SET title = ?,picture=?,description=?,unitprice=?,available=?,categoryid=?,unitinstock=? WHERE productid = ?", [product.title,product.picture,product.description,product.unitprice,product.available,product.categoryid,product.unitinstock, taskId], function (err, res) {
            if(err) {
                  console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
              }
      }); 
  };



  Product.remove = function(taskId, result){
    sql.query("DELETE FROM products WHERE productid = ?", [taskId], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};


module.exports= Product;