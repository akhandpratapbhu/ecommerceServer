var sql = require('./db');

var User=function(users){
    this.username=users.username;
    this.password=users.password;
    this.contactnumber=users.contactnumber;
    this.email=users.email;
    this.question=users.question;
    this.answer=users.answer;
    this.role=users.role;


};



User.createTask = function (new_task, result) {    
    sql.query("INSERT INTO users set ?", new_task, function (err, res) {
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
User.getAllTask = function (result) {
  sql.query("select * from users", function (err, res) {
          if(err) {
            console.log("error: ", err);
            result(null, err);
          }
          else{
            console.log('users : ', res);  
            result(null, res);
          }
      });   
};
module.exports=User;