import express from 'express';
import { insertUser} from '../models/user/UserModel.js';

const router = express.Router();

// User signup
router.post("/", async(req, res) => {
    try{
    //    console.log(req.body);

    //get the user obj
    //data verification
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