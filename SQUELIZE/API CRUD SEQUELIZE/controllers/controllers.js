import Product from "../models/produits.js";
import productValidation from "../validation/productValidation.js";

const getAll = (req, res) => {
    Product.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } })
        .then((products) => res.status(200).json({ products: products }))
        .catch((error) => res.status(500).json(error))
}
const getOne = (req, res) => {
    const { id } = req.params;
    Product.findByPk(id)
        .then((product) => {
            if (!product) {
                return res.status(404).json({ msg: "Not Found" });
            } else {
                return res.status(200).json(product);
            }
        })
        .catch((error) => res.status(500).json(error))
}


const createOne = (req, res) => {
    const { body } = req;
    const { error } = productValidation(body);
    if (error) return res.status(401).json(error.details[0].message);

    Product.create({ ...body })
        .then(() => res.status(200).json({ msg: "Insertion avec success" }))
        .catch((error) => res.status(500).json(error));
}


const updateOne = (req, res) => {
    const {id}=req.params;
    const {body}=req;
    Product.findByPk(id)
    .then((product)=>{
      if(!product) return res.status(404).json({msg:"Not Found"});
      product.title=body.title;
      product.price=body.price;
      product.description=body.description;
      product.save()
      .then(()=>res.status(201).json({msg:"Updated successfully"}))
      .catch((error)=>res.status(500).json(error))
    })
    .catch((error)=>res.status(500).json(error));
 }


const deleteOne = (req, res) => {
    const {id}=req.params;
    Product.destroy({where:{id:id}})
    .then((product)=>{
        if(product===0){
            return res.status(404).json({msg:"Not Found"});
        }else{
            return res.status(201).json({msg:"Deleted succesFully"});
        }
    })
    .catch((error)=>res.status(500).json(error));
 }

export { getAll, getOne, createOne, updateOne, deleteOne };