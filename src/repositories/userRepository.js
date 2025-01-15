const User = require('../schema/userSchema');

async function findUser(parameters) {
    try {
        const response = await User.findOne({ ...parameters });
        return response;
    } catch(error) {
        console.log(error);
    }
    
} 

async function createUser(userDetails) {
    try {
        const response = await User.create(userDetails);
        return response;
    } catch(error) {
        throw {message: "error in creating user"}
    }
    
}

module.exports = {
    findUser,
    createUser
};