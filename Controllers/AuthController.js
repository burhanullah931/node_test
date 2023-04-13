const User = require('./../Models/User')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const saltRounds = 10;


exports.signUp = async(req, res) =>{
    try {
        const password = await bcrypt.hash(req.body.password, saltRounds)
        const data = {...req.body, password}
        const user = await User.create(data)
        return res.json(user);
    } catch (error) {
        res.json(error.errors)
    }
};

exports.login = async (req, res) => {
    
    const user = await User.findOne({email : req.body.email});
    if(!user){
        return res.status(404).json("User not found");
    }

    if(!(await bcrypt.compare(req.body.password, user.password))){
        return res.status(404).json("User not found");
    }

    const token = await jwt.sign({user}, process.env.TOKEN);

    return res.json({user, access_token:token});
}