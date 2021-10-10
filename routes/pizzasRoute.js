const express = require('express')
const router = express.Router()
const Food = require('../models/pizzaModel')

router.get('/getallpizzas', async (req, res) => {

    try {
        const pizzas = await Food.find({})
        res.send(pizzas)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/addfood", async (req, res) => {
    const food = req.body.food
    try {
        const newfood = new Food({
            name: food.name,
            category: food.category,
            image: food.image,
            varients: ['small', 'medium', 'large'],
            description: food.description,
            prices: [food.prices],
            restaurantId: food.restaurantId
        })
        await newfood.save()
        res.send('New food added successfully')
    } catch (error) {
        return res.status(400).json({ message: error })
    }
})

router.post('/getfoodbyid', async (req, res) => {
    const foodid = req.body.foodid

    try {
        const food = await Food.findOne({ _id: foodid })
        res.send(food)
    } catch (error) {
        return res.status(400).json({ message: error })
    }
});

router.post('/editfood', async (req, res) => {
    const editedpizza = req.body.editedpizza

    try {
        const pizza = await Food.findOne({ _id: editedpizza._id })

        pizza.name = editedpizza.name,
            pizza.description = editedpizza.description,
            pizza.image = editedpizza.image,
            pizza.category = editedpizza.category,
            pizza.restaurantId = editedpizza.restaurantId,
            pizza.prices = [editedpizza.prices]

        await pizza.save()
        res.send('Pizza details edited successfully')
    } catch (error) {
        return res.status(400).json({ message: error })
    }
})


router.post('/deletepizza', async (req, res) => {
    const pizzaid = req.body.pizzaid

    try {
        await Food.findOneAndDelete({ _id: pizzaid })
        res.send('Food deleted successfully')
    } catch (error) {
        return res.status(400).json({ message: error })
    }

})


module.exports = router