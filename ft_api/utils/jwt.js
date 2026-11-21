import jwt from 'jasonwebtoken';

export const singJWT = (obj) => {
    const token = jwt.sign(obj, process.env.JWT_SECRET,{
        expiresIn: "1d",
    });

    //store in database
    return token;
}