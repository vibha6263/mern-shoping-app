  const mongoose = require("mongoose");
  const productSchema = mongoose.model('productSchema')

const products = require("../assets/products.json");
module.exports.addProduct = (req,res)=>{
    
    var data = new productSchema();
    data.title=req.body.title
    data.image =req.body.image
    data.price = req.body.price
    data.email = req.body.email
    
    data.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
                res.send(['Unable To Add Product Details.']);
        }
    
    });
    

}