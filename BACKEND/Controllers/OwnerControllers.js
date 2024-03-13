const Owners=require("../Model/OwnerModel");
//data display
const getOwner=async(req, res, next)=>{
    let Owner;
    //Get owner
    try{
        Owner=await Owners.find();
    }catch(err){
        console.log(err);
    }
    //not found
    if(!Owner){
        return res.status(404).json({message:"Owner not found"});
    }
    //Display owner
    return res.status(200).json({Owner});
};

//data insert
const addOwner=async(req,res,next)=>{

    const{name,phoneNumber,email,username,password}=req.body;

    let Owner;

    try{
        Owner=new Owners({name,phoneNumber,email,username,password});
        await Owner.save();
    }catch(err){
        console.log(err);
    }
    //not insert owner
    if(!Owner){
        return res.status(404).json({message:"unable to add owner"});
    }
    return res.status(200).json({Owner})
};
//Get by Id
const getById=async(req,res,next)=>{
    const id=req.params.id;

    let Owner;

    try{
        Owner=await Owners.findById(id);
    }catch(err){
        console.log(err);
    }
    //not available Owner
    if(!Owner){
        return res.status(404).json({message:"Owner Not Found"});
    }
    return res.status(200).json({Owner});

}
//update Owner Details

const updateOwner=async(req,res,next)=>{
    const id=req.params.id;
    const{name,phoneNumber,email,username,password}=req.body;

    let Owner;

    try{
        Owner=await Owners.findByIdAndUpdate(id,
         {name:name,phoneNumber:phoneNumber,email:email,username:username,password:password});
         Owner=await Owner.save();
    }catch(err){
        console.log(err);
    }
    if(!Owner){
        return res.status(404).json({message:"Unable to update Owner details"});
    }
    return res.status(200).json({Owner});
};

//Delete Owner Details
const deleteOwner=async(req,res,next)=>{
    const id=req.params.id;

    let Owner;
    try{
        Owner =await Owners.findByIdAndDelete(id)
    }catch(err){
        console.log(err);
    }
    if(!Owner){
        return res.status(404).json({message:"Unable to delete Owner details"});
    }
    return res.status(200).json({Owner});
};
exports.getOwner=getOwner;
exports.addOwner=addOwner;
exports.getById=getById;
exports.updateOwner=updateOwner;
exports.deleteOwner=deleteOwner;
