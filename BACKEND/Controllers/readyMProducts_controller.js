//importing models
let readyMadeProduct=require("../models/readyMadeProducts_model");


//Inserting Ready Made Items


exports.addReadyMproduct=async(req,res)=>{

  const item_name=req.body.item_name;
  const item_price=Number(req.body.item_price);
  const stock_count=Number(req.body.stock_count);
  const thumb_img=req.body.thumb_img;
  const materiel=req.body.materiel;
  const category=req.body.category;

    const NewRMItem=new readyMadeProduct({
        item_name,
        item_price,
        stock_count,
        thumb_img,
        materiel,
        category


    });

    await NewRMItem.save().then(()=>{

        res.status(200).send({status:"new ready made Item Added"});



    }).catch((err)=>{

        console.log(err);
        res.status(500).send({status:"Error While Inserting",err});

    })

}


//Gather All Ready Made Items

exports.getAllReadyMitems=async(req,res)=>{


await readyMadeProduct.find().then((RMproducts)=>{

res.json(RMproducts);


}).catch((err)=>{
    res.status(200).send({status:"Error While fetching",err});
})



}

//gether product By id

exports.getReadyMadeProductById=async(req,res)=>{

let proID=req.params.id;

await readyMadeProduct.findById(proID).then((rMproduct)=>{

res.json(rMproduct);


}).catch((err)=>{

    res.status(200).send({status:"Error While fetching",err});

})



}