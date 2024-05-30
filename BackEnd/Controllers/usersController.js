require('dotenv').config();
const User = require("../models/userModel")
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodeMailer = require('nodemailer');
const mongoose = require('mongoose');


const createToken = (_id)=>{
    return jwt.sign({_id},process.env.SECRET,{ expiresIn: "3d"})
}


// Auth for users

// login 

const loginUser = async (req, res)=>{
    const {email , password} = req.body;

    
    try{
        const user = await User.login(email, password)

        const {userType, fullName, photo} = user;

        // create token
        const token = createToken(user._id);
        const _id = user._id
        const _verificationToken = user.verificationToken
        const verified = user.verified

        res.status(200).json({_id,email, token, userType, fullName, photo, _verificationToken,verified})

    }catch(error){
        res.status(400).json({error: error.message})
    }
}



// SignIn

const signupUser = async (req, res)=>{

    const {fullName,email, password, confirmPass, photo, userType} = req.body;

 
    // Generate a verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');


    try{
        const user = await User.signup(fullName,email, password, confirmPass, photo, userType , verificationToken)

        // create token
        const token = createToken(user._id);
        const _id = user._id
        const _verificationToken = user.verificationToken
        const verified = user.verified


        res.status(200).json({_id,email, token, userType, fullName,photo, _verificationToken, verified})

    }catch(error){
        res.status(400).json({error: error.message})
        console.log('error')
    }

}


// Function to send email
const sendEmail = async (emailOptions) => {
    const transporter = nodeMailer.createTransport({
        service: process.env.EMAIL_SERVICE, // e.g., 'gmail'
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    await transporter.sendMail(emailOptions); 
};

// sending email to the admin
const sendEmailToAdmin = async (req, res) => {
    const {
        name,
        registrationNumber,
        countryOfRegistration,
        physicalAddress,
        phoneNumber,
        website,
        file,
        email,
        verificationToken
    } = req.body;

    // Perform basic validation on input data
    if (!name || !registrationNumber || !countryOfRegistration || !physicalAddress || !phoneNumber || !website || !email || !verificationToken) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Compose email to send to admin
    const adminEmailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: 'New Account Verification Request',
        text: `A new account verification request has been submitted with the following details:
        Name: ${name}
        Registration Number: ${registrationNumber}
        Country of Registration: ${countryOfRegistration}
        Physical Address: ${physicalAddress}
        Phone Number: ${phoneNumber}
        Website: ${website}
        Email: ${email}
        VerificationLink: ${process.env.SERVER_URL}/api/users/verify/${verificationToken}`,
        attachments: [
            {
                filename: file.originalname,
                content: file.buffer
            }
        ]
    };

    try {
        // Send the email to admin
        await sendEmail(adminEmailOptions);

        // Send response back to the user
        res.status(200).json({ message: 'Verification request sent to admin' });
      
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// verify email
const verifyEmail = async (req, res) => {
        const { token } = req.params;
    
        // Find user by token
        const user = await User.findOne({ verificationToken: token });
        if (!user) {
            return res.status(400).send('Invalid token');
    
        }
    
        // Mark user as verified
        user.verified = true;
        user.verificationToken = undefined; // Clear the token
        await user.save();
    
        res.status(200).send('Email verified successfully');
};


// DELETE user

const deleteUser = async (req,res)=>{

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such User"});
    }

    const user = await User.findOneAndDelete({_id: id});

    if(!user){
        return res.status(400).json({error: "No such post"});
    }

    res.status(200).json(user);

}



module.exports = {loginUser, signupUser , sendEmailToAdmin, verifyEmail, deleteUser};