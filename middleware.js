const {productSchema , reviewSchema} = require('./schema');


const validateProduct = (req , res , next)=>{
    let {name , price ,img , desc } = req.body;
    const {error} = productSchema.validate({name , price ,img , desc });
    if(error){
        return res.render('error');
    }
    next();
};
const validateReview = (req , res , next)=>{
    let {rating , comment} = req.body;
    const {error} = reviewSchema.validate({rating , comment });
    if(error){
        return res.render('error');
    }
    next();

};



module.exports  = {validateProduct , validateReview};