var jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const User = require('./../Models/User')


const auth = async (req, res, next) => {

    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[1]){
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decode = jwt.verify(token, process.env.TOKEN);
            const user = await User.findOne({_id:new ObjectId(decode.user._id)});
            if(!user){
                return res.status(401).json({error:"Unauthorized"});
            }  
                next();
        } catch (error) {
            
            return res.status(401).json({error:"Unauthorized"})
        }
        
    }

}

module.exports = auth;