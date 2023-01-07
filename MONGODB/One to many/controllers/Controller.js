import categories from "../models/categorySchema.js";
import produits from "../models/produitSchema.js";

const AjouteCategory = async (req, res) => {
    const { libelle, color, } = req.body;

    if (!libelle || !color) {
        res.status(404).json({ msg: "Completez les champs !" });
    }
    try {
        const category = new categories({
            libelle: libelle, color: color,
        })

        await category.save();
        res.status(201).json(category);

    } catch (error) {
        res.status(422).json({ msg: error });
    }
}


const AfficheCategory = async (req, res) => {
    try {
        const data = await categories.find();
        res.status(201).json({ donner: data });
    } catch (error) {
        res.status(422).json({ msg: error });
    }
}


const AjouteProduit = async (req, res) => {
    const { libelle, prix, description, idCategory } = req.body;

    if (!libelle || !prix || !description || !idCategory) {
        res.status(404).json({ msg: "Completez les champs !" });
    }
    try {
        await produits.create({
            libelle: libelle, prix: prix, description: description, category_id: idCategory
        });
        res.status(201).json("success");

    } catch (error) {
        res.status(422).json({ msg: error });
    }
}

const AfficheProduitCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await produits.find({ category_id: id });
        res.status(201).json({ donner: data });
    } catch (error) {
        res.status(422).json({ msg: error });
    }
}


const AfficheProduit = async (req, res) => {
    try {
        const data = await produits.find().populate('category_id');
        res.status(201).json({ donner: data });
    } catch (error) {
        res.status(422).json({ msg: error });
    }
}



export { AjouteCategory, AjouteProduit, AfficheCategory, AfficheProduit, AfficheProduitCategory }