import jwt from "jsonwebtoken";

export const GenerateAccessToken=(id,name,email)=>{
    return jwt.sign({ id, name, email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1800s'
    });
}

export const GenerateRefreshToken=(id,name,email)=>{
    return jwt.sign({ id, name, email }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '1y'
    });
}