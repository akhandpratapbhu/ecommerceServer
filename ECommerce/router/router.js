module.exports = function(app) {
  var productcontroller=require('../controllers/productcontroller');
  var categorycontroller=require('../controllers/categorycontroller');
  var suppliercontroller=require('../controllers/suppliercontroller');
  var cateAllProcontroller=require('../controllers/cateAllProcontroller');
  var ordersController = require('../controllers/orderscontroller');
var orderdetailsController = require('../controllers/orderdetailscontroller');
var paymentsController = require('../controllers/paymentscontroller');
var deliveriesController = require('../controllers/deliverycontroller');   
var shippersController = require('../controllers/shipperscontroller');
var customerController = require('../controllers/customercontroller');
const usercontroller=require('../controllers/usercontroller');


app.route('/api/customers')
     .get(customerController.getAll)
     .post(customerController.insert);
   
  app.route('/api/customers/:customerid')
      .get(customerController.getBy)
      .put(customerController.update)
      .delete(customerController.remove);

  app.route('/api/products')
     .get(productcontroller.getAll)
     .post(productcontroller.insert);
   
  app.route('/api/products/:taskId')
      .get(productcontroller.getBy)
      .put(productcontroller.update)
      .delete(productcontroller.remove);
 app.route('/api/categories')
     .get(categorycontroller.getAll)
     .post(categorycontroller.insert);
   
  app.route('/api/categories/:taskId')
      .get(categorycontroller.getBy)
      .put(categorycontroller.update)
      .delete(categorycontroller.remove);
      
  app.route('/api/suppliers')
  .get(suppliercontroller.getAll)
  .post(suppliercontroller.insert);

 app.route('/api/suppliers/:taskId')
   .get(suppliercontroller.getBy)
   .put(suppliercontroller.update)
   .delete(suppliercontroller.remove);
   app.route('/api/allcategoryproduct')
  .get(cateAllProcontroller.getAll)
  .post(cateAllProcontroller.insert);

 app.route('/api/allcategoryproduct/:taskId')
   .get(cateAllProcontroller.getBy)
   .put(cateAllProcontroller.update)
   .delete(cateAllProcontroller.remove);


   app.route('/api/orderdetails')  
        .get(orderdetailsController.getAll) 
        .post(orderdetailsController.insert);
      
        app.route('/api/orderdetails/:orderdetailid')
        .get(orderdetailsController.getBy);


        app.route('/api/orders')  
        .get(ordersController.getAll) 
        .post(ordersController.insert);
      
        app.route('/api/orders/:orderid')
        .get(ordersController.getBy);
        
        app.route('/api/orders/:customerid')
        .put(ordersController.update)
        .delete(ordersController.remove);

        app.route('/api/payments')  
        .get(paymentsController.getAll); 
        
        app.route('/api/payments/:paymentid')
        .get(paymentsController.getBy);

        app.route('/api/deliveries')  
        .get(deliveriesController.getAll) 
        .post(deliveriesController.insert);
        
        app.route('/api/deliveries/:deliveryid')
        .get(deliveriesController.getBy);

        app.route('/api/shippers')
        .get(shippersController.getAll)
        .post(shippersController.insert);
      
        app.route('/api/shippers/:shipperid')
         .get(shippersController.getBy)
         .delete(shippersController.remove);

         app.route('/api/user')
         .get(usercontroller.getAll)
         .post(usercontroller.insert);
         }


