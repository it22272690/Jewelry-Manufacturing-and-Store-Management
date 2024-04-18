const Cart = require('../models/cart');

exports.addToCart = async (req, res) => {
    try {
        const uid=req.params.id;
        const cart = await Cart.findOne({ user: uid })


       if (cart) {
            const product = req.body.cartItems.product;
            const itemIndex = cart.cartItems.findIndex(c => c.product == product);
         

            if (itemIndex != -1) {
                // If the product already exists in the cart, update its quantity
                cart.cartItems[itemIndex].quantity += req.body.cartItems.quantity
            } else {
                // If the product does not exist in the cart, push it to the cartItems array
                cart.cartItems.push(req.body.cartItems)
            }
            //finding total
            cart.totalAmount +=(req.body.cartItems.quantity) * (req.body.cartItems.unitprice);
         

            // Save the updated cart
            const updatedCart = await cart.save()
            return res.status(201).json({ cart: updatedCart })
        } else {
            const total=(req.body.cartItems.unitprice)*(req.body.cartItems.quantity);
            // If the user doesn't have a cart, create a new one
            const newCart = new Cart({
                user: uid,
                cartItems: [req.body.cartItems],
                totalAmount:total
            

            });

            // Save the new cart
            const savedCart = await newCart.save()
            return res.status(201).json({ cart: savedCart })
        }
    } catch (error) {
        console.error('Error adding product to cart:', error)
        return res.status(500).json({ error: 'Internal server error' })
    }
}




/**************************************************/


exports.getAllCartItems=async(req,res)=>{

    const uid=req.params.id;
    await Cart.findOne({ user: uid }).populate("user cartItems totalAmount").then((showcart)=>{
    
    res.json(showcart);
    
    
    }).catch((err)=>{
        res.status(500).send({status:"Error While fetching",err});
    })
    
    
    
    }

//*********************************************************** */

exports.clearCart=async(req,res)=>{

    const uid=req.params.id;

    await Cart.findOneAndDelete({ user: uid }).then(()=>{
        res.status(200).send({status:"Cart Cleared"})
  
     }).catch((err)=>{
  
         console.log(err);
     res.status(500).send({status:"Error While Deleting"})
  
     })



   }

   /*********************************************************** */
exports.removeProducts=async(req,res)=>{

    try {
        const uid=req.params.id;
        const cart = await Cart.findOne({ user: uid })

        if (cart) {
            const product = req.body.cartItems.product;
            const itemIndex = cart.cartItems.findIndex(c => c.product == product);
         

            if (itemIndex != -1) {
                cart.totalAmount -=cart.cartItems[itemIndex].quantity * cart.cartItems[itemIndex].unitprice;
              cart.cartItems.splice(itemIndex,1);
             
         
           
            } else{
                return res.status(500).json({ error: ' Product Not Available' });

            }

            // Save the updated cart
            const updatedCart = await cart.save()
            return res.status(201).json({ cart: updatedCart })}





    } catch (error) {
        console.error('Error adding product to cart:', error)
        return res.status(500).json({ error: 'Internal server error' })
    }







}