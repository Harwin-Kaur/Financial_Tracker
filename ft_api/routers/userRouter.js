import express from 'express';
import { insertUser} from '../models/user/UserModel.js';
import { hashPassword} from '../utils/bcryptjs.js';

const router = express.Router();

// User signup
router.post("/", async(req, res, next) => {
    try{
    //    console.log(req.body);

    //encrypt the password

    req.body.password = hashPassword(req.body.password);
   console.log(req.body.password);

    //insert the user
    const user = await insertUser(req.body)

    user?._id 
    ? res.json({
        status: "success",
        message: "Your account has been created you may login now"
       })
       :
       res.json({
        status: "error",
        message: "Failed to create account"
       });
    }catch(error){
         res.json({
            status: "error",
            message: error.message,
         });
    }
})

// User  Login

// User profile


export default router;