import express from 'express';
import { insertUser} from '../models/user/UserModel.js';
import { hashPassword} from '../utils/bcryptjs.js';
import { getUserByEmail} from '../models/user/UserModel.js';

import { comparePassword} from '../utils/bcryptjs.js';

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
        let msg = error.message;
         if (msg.includes("E11000 duplicate key error collection")){
            msg = "There is another user have used this email, try to login or use another email";
         }

         res.json({
            status: "error",
            message: msg,
         });
    }
})

// User Login

router.post("/login", async (req, res, next) => {
   try {
      //1. receive email and password
      const { email, password } = req.body;
      if (email && password){
         //2. find the user by email
      const user = await getUserByEmail(email); //if email is not found then it will not run the code inside
      if(user?._id){

          //3. match the password

      const isMatched = comparePassword(password, user.password);

      if(isMatched){
         // if user actually auntheticated then we will create a jwt and store it in db and return the user with jwt token

         user.password = undefined; // we are removing the password from the user object so that it will not be sent to the client
         res.json({
         status: "success",
         message:"Logged in Successfully",
         user,
      });

      return;
         }
      }
      }

      //4. jwt and store the jwt in db then return the user {} with jwt token 

         

      res.status(401).json({
         'error': 'Invalid email or password',
      });
   }
   catch(error) {
      res.status(500).json({
         error: error.message,
      });
   }
});

// User profile


export default router;