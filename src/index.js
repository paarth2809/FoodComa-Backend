const express = require('express');
const multer = require('multer');

const serverConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute');
const cartRouter = require('./routes/cartRoute');
const authRouter = require('./routes/authRoute');
const { isLoggedIn } = require('./validation/authValidator');
const uploader = require('./middlewares/multerMiddleware');
const cookieParser=require('cookie-parser')
const cloudinary=require('./config/cloudinaryConfig')
const fs=require('fs/promises')

const app = express();

// Express middleware
app.use(cookieParser())
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// Routing middleware
app.use('/users', userRouter); // localhost:5500/users
app.use('/carts', cartRouter);
app.use('/auth', authRouter);

app.get('/ping', isLoggedIn, (req, res) => {
    // Controller that runs only if isLoggedIn middleware is valid
    console.log(req.body);
    console.log(req.cookies);
    return res.json({ message: 'ping' });
});

// File upload route
app.post('/photo', uploader.single('incomingFile'), async (req, res) => {
    console.log(req.file)
    const result= await cloudinary.uploader.upload(req.file.path)
    console.log("result from cloudinary: " , result)
    await fs.unlink(req.file.path)
    return res.json({message: 'ok'})
});

// Start server
app.listen(serverConfig.PORT, async () => {
    await connectDB();
    console.log(`Server started at port ${serverConfig.PORT}`);
});
