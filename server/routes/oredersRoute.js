const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Order= require('../models/orderModel');

const stripe = require('stripe')('sk_test_51JOqIBGHjxmyDd1kIWUcam8tnMWZ7kR5StSu7KYd7ZS4fAnhazVRAyYFp2uC8fKGtR4Qc6yF1Gw2Z3Z8cn7EYpho001E9BTaPF');

router.post('/placeorder', async (req, res)=>{

    const {token, total, currentUser, cardItems}= req.body
try {
    const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
    })

    const payment= await stripe.charges.create({
        amount:total*100,
        currency:'eur',
        customer:customer.id,
        receipt_email: token.email
    }, {
        idempotencyKey: uuidv4()
    })

    if (payment)
    {
       const neworder= new Order({
            name:currentUser.name,
            email:currentUser.email,
            userid:currentUser._id,
            orderItems:cardItems,
            orderAmount:total,
            shippingAddress:{
                street:token.card.address_line1,
                city:token.card.address_city,
                country:token.card.address_country,
                pincode:token.card.address_zip
            },
            category:token.card.category,
            transcationId:payment.source.id
        })

        neworder.save()

        res.send('Order placed successfully')
    }
    else {res.send('Payment Failed')}


} catch (error) {
    return res.status(400).json({message:'Something went wrong ' + error});
}

});


router.post('/getuserorders',async(req,res) => {
    const {userid}= req.body
    try {
        const orders = await Order.find({userid:userid}).sort({_id:-1})
        res.send(orders)
    } catch (error) {
        return res.status(400).json({message:'Something went wrong'})
    }
})


router.get('/getallorders',async (req,res)=>{
        try {
            const orders =await Order.find({})
            res.send(orders)
        } catch (error) {
            return res.status(400).json({message:error})
        }
})


router.post('/deliverorder', async(req,res)=>{

    const orderid = req.body.orderid
    try {
        const order=await Order.findOne({_id:orderid})
        order.isDelivered= true
        await order.save()
        res.send('Order delivered successfully')
    } catch (error) {
        return res.status(400).json({message: error})
    }
})



module.exports=router