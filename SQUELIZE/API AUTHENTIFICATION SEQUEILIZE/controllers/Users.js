import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import { GenerateAccessToken,GenerateRefreshToken } from "../services/Service.js";

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','name','email']
        });
        res.status(201).json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async (req, res) => {
    const { name, email, password, confPassword } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Mot de passe doit-etre egal a confirm passwor" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            name: name,
            email: email,
            password: hashPassword
        });
        res.status(200).json({ msg: "Register successfully" });
    } catch (error) {
        console.log(error);
    }
}

export const Login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                email: req.body.email
            }
        });

        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) return res.status(400).json({ msg: "Password incorrect" });
        const userId = user[0].id;
        const email = user[0].email;
        const name = user[0].name;

        const accessToken = GenerateAccessToken(userId,name,email);
        const refreshToken = GenerateRefreshToken(userId,name,email);

        await Users.update({ refresh_token: refreshToken }, {
            where: {
                id: userId
            }
        });

        res.status(200).json({ accessToken,refreshToken });
    } catch (error) {
       res.status(400).json("Utilisateur introuvable");
    }
}