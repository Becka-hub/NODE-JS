import etudiants from "../models/Etudiant.js";

const AjouteEtudiant = async (req, res) => {
    const { nom, prenom, email, age } = req.body;

    if (!nom || !prenom || !email || !age) {
        res.status(404).json({ msg: "Completez les champs !" });
    }
    try {

        const existeEtudiant = await etudiants.findOne({ email: email });
        if (existeEtudiant) {
            res.status(404).json({ msg: "Email etudiant dejas utiliser" });
        } else {
            const etudiant = new etudiants({
                nom: nom,
                prenom: prenom,
                email: email,
                age: age
            });

            await etudiant.save();
            res.status(201).json({ title: "Success", msg: "Etudiant ajouter avec success", donner: etudiant });
        }
    } catch (error) {
        res.status(422).json({ msg: error });
    }
}


const AfficheTousEtudiant = async (req, res) => {
    try {
        const data = await etudiants.find();

        // .sort({ _id: -1 }) Id decroissont
        // .select({ nom: 1, age: 1 }) seulement le nom et l'qge
        // .limit(1) limiter de 1

        // const data = await etudiants.find();
        // const data = await etudiants.find({nom:'RAKOTONDRATSIMBA'});
        // const data = await etudiants.find({ age: { $gte: 22 } }); age >=22
        // const data = await etudiants.find({ age: { $gt: 22 } }); age >22
        // const data = await etudiants.find({ age: { $lte: 24 } }); age <=22
        // const data = await etudiants.find({ age: { $lt: 24 } }); age <22
        // const data = await etudiants.find({ age: { $eq: 24 } }); age = 22
        // const data = await etudiants.find({ age: { $in: [22, 24] } }); age entre 22 et 24
        // const data = await etudiants.find({ age: { $nin: [22, 24] } }); age n'est pas entre 22 et 24

        res.status(201).json({ title: "Success", msg: "Etudiant  avec success", rows: data.length, donner: data });
    } catch (error) {
        res.status(422).json({ msg: error });
    }
}

const UpdateEtudiant = async (req, res) => {
    const { nom, prenom, email, age } = req.body;
    const { id } = req.params;

    try {
        const etudiant = await etudiants.findById(id);
        if (!etudiant) {
            res.status(404).json({ msg: "etudiant introuvable" });
        } else {
            if (nom !== "") {
                etudiant.nom = nom;
            }
            if (prenom !== "") {
                etudiant.prenom = prenom;
            }
            if (email !== "") {
                etudiant.email = email;
            }
            if (age !== "") {
                etudiant.age = age;
            }
            const updateData = await etudiant.save();




            //    const updateData = await etudiants.update({_id:id},{
            //     $set:{
            //         age:age,
            //         nom:nom
            //     }
            //    });


            // const updateData = await etudiants.findByIdAndUpdate(id, {
            //     $set: {
            //         age: age,
            //         nom: nom
            //     }
            // }, { new: true });

            res.status(201).json({ title: "Success", msg: "Update etudiant success", donner: updateData });
        }

    } catch (error) {
        res.status(422).json({ msg: error });
    }
}



const DeleteEtudiant = async (req, res) => {
    const { id } = req.params;
    try {
        // await etudiants.deleteOne({ _id: id });
        //  await etudiants.deleteMany({ _id: id });
        const data = await etudiants.findByIdAndRemove(id);
        res.status(201).json({ title: "Success", msg: "Deleted etudiant success", donner: data });


    } catch (error) {
        res.status(422).json({ msg: error });
    }
}


const AffichePagination = async (req, res) => {
    const { page = 1, limit = 2 } = req.query;
    try {
        const data = await etudiants.find();
        const dataPaginate = await etudiants.find().sort('nom').limit(limit * 1).skip((page - 1) * limit).exec();
        const totalPage = data.length / limit;
        res.status(201).json({ title: "Success", msg: "Etudiant success", page: page, totalPage: totalPage, donner: dataPaginate });
    } catch (error) {
        res.status(422).json({ msg: error });
    }
}




export { AjouteEtudiant, AfficheTousEtudiant, UpdateEtudiant, DeleteEtudiant, AffichePagination }