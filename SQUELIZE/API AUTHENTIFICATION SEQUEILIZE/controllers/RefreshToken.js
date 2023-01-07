import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import { GenerateAccessToken } from "../services/Service.js";

export const RefreshToken = async (req, res) => {
    const authHeader = req.headers['authorization'];
    const refreshToken = authHeader && authHeader.split(' ')[1];
    if (refreshToken === null) return res.status(401).json("Token required");

    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    });
    if (!user[0]) return res.status(401).json("Refresh Token invalid");

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(401).json("Refresh Token invalid");
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;

        const refreshedToken = GenerateAccessToken(userId, name, email);
        res.status(200).json({ accessToken: refreshedToken });
    });
}