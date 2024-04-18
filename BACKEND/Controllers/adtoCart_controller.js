//importing Models
const jewCart=require("../models/jewlleryCart_model");

//check the available cart ||create cart

function chkUsercart(uid){

let userCart=jewCart.findOne({user:uid});

if(!userCart){

userCart=new jewCart({user:uid,totalAmount:0,products:[]})

return userCart;

}
else{

    return userCart;
}


}


//insert item to cart

exports.addItemsToCart=async(req,res)=>{

const jewuserCart= await chkUsercart(req.params.uid);








}