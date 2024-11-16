const express = require("express");
const Product = require("../models/Product");
const Review = require("../models/Review");
const {validateProduct} = require('../middleware');

const router = express.Router() ; // mini instance
// to show all products
router.get("/" , (req , res)=>{
 res.send("products pe check kar");
})
router.get("/products" , async(req , res)=>{
    try{
        let products = await Product.find({})
        res.render("products/index.ejs" , {products});
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

//to show the form for new product
router.get('/product/new', (req,res)=>{
    try{
        res.render('products/new');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message}); 
    }
})

//to actually add the product in db
router.post('/products' , validateProduct ,async (req,res)=>{
    try{
        let {name , img , price , desc} = req.body;
        await Product.create({name , img , price , desc});
        req.flash('success' , 'Product added successfully');
        res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})


// to show a particular porduct
router.get('/products/:id' ,async(req,res)=>{
    try{
        let {id} = req.params;
      let foundProduct = await Product.findById(id).populate('reviews');
      res.render('products/show' , {foundProduct , msg:req.flash('msg')})
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }


})

// form to edit the product
router.get('/products/:id/edit', async (req,res)=>{
    try{
        let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/edit' , {foundProduct});
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

// to actually edit the data in db

router.patch('/products/:id' ,validateProduct , async(req, res)=>{
   try{
    let {id} = req.params;
    let{name , img , price , desc} = req.body;

    await Product.findByIdAndUpdate( id , {name , img , price , desc});
    req.flash('success' , 'Product edited successfully');
    res.redirect(`/products/${id}`);
   }
   catch(e){
    res.status(500).render('error' , {err:e.message});
   }
})


// to delete a product 
router.delete('/products/:id' , async(req,res)=>{
    try{
        let {id} = req.params;
    const product = Product.findById(id);
    // for(let id of product.reviews){
    //     await Review.findByIdAndDelete(id);
    // }
    
    await Product.findByIdAndDelete(id);
    req.flash('success' , 'Product deleted successfully');
    res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})



module.exports = router ;