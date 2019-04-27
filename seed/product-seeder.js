var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
    imagePath:'https://www.americanmachinist.com/sites/americanmachinist.com/files/styles/article_featured_standard/public/uploads/2014/06/amimts0624mazak.jpg?itok=RTmPaboN',
    title : 'Mazak Machines',
    description: 'Awesome Game!!!!!!',
    price : 10
}),
new Product({
    imagePath:'https://www.americanmachinist.com/sites/americanmachinist.com/files/styles/article_featured_standard/public/uploads/2014/06/amimts0624mazak.jpg?itok=RTmPaboN',
    title : 'Mazak Machines',
    description: 'Awesome Game!!!!!!',
    price : 10
}),
new Product({
    imagePath:'https://www.americanmachinist.com/sites/americanmachinist.com/files/styles/article_featured_standard/public/uploads/2014/06/amimts0624mazak.jpg?itok=RTmPaboN',
    title : 'Mazak Machines',
    description: 'Awesome Game!!!!!!',
    price : 10
}),
new Product({
    imagePath:'https://www.americanmachinist.com/sites/americanmachinist.com/files/styles/article_featured_standard/public/uploads/2014/06/amimts0624mazak.jpg?itok=RTmPaboN',
    title : 'Mazak Machines',
    description: 'Awesome Game!!!!!!',
    price : 10
})];

var done = 0;
for (var i=0; i< products.length;i++){
    products[i].save(function(err,result){
        done++;
        if (done ===products.lenght){
            exit();
            
        }
    });

}

