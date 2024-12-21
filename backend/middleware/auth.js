const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')
const authMiddleware = (req,res,next) =>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(400).json({message:"This action is not allowed"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(error){
        res.status(401).json({message:"Invalid token"})
    }
}

module.exports = authMiddleware