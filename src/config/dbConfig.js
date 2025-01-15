const mongoose=require('mongoose')
const serverConfig=require('./serverConfig')

// the below function helps to connect to mongoDB server

async function connectDB(){
    try {
        await mongoose.connect(serverConfig.DB_URL)
        console.log("successfully connected to mongoDB server")
    } catch (error) {
        console.log("not able to connect to mongoDB server")
        console.log(error)
    }
}

module.exports=connectDB