export const auth = (req, res, next) =>{
    try {
       const isAuth = false;
       
       //2. create auth middleware

      // - validate if token is validate

      //- get user email from the token

      //-get user by email

       isAuth?next() : res.status(403).json({
        error: "Unauthorized",
       });
        
    } catch (error) {
        res.status(500).json({
         error: error.message,
       })
    }
}