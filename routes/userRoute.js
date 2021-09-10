const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const { validationResult } = require('express-validator')
const {validationCheck} = require('./datacheck')



router.post('/register',(validationCheck), async (req, res)=> {
    

    try {
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.mapped() })
        const { name, email, password } = req.body
    const user= await User.findOne({email})
    
        if (user){
            return res.status(400).json({ errors: [{ msg: 'User exist !' }] })
        }
        const newUser = new User({ name, email, password })
        const registredUser= await newUser.save()
        res.send('user register success')
    } catch (error) {
        return res.status(400).json({ message: error })
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.find({ email, password })
        if (user.length > 0) {
            const currentUser={
                name:user[0].name,
                email:user[0].email,
                isAdmin:user[0].isAdmin,
                _id:user[0].id
            }
            res.send(currentUser);
        } else {
            return res.status(400).json({ message: 'user login failed' })
        }

    } catch (error) {
        return res.status(400).json({ message: 'something went wrong' })
    }
});

router.get('/getallusers' , async (req, res)=>{
        try {
            const users = await User.find({})
            res.send(users)
        } catch (error) {
            return res.status(400).json({ message: error })
        }
})

router.post('/deletuser', async (req, res)=>{
    const userid= req.body.userid
    try {
        await User.findOneAndDelete({_id: userid})
        res.send('User deleted successfully')
    } catch (error) {
        return res.status(400).json({ message: error })
    }
})
module.exports = router