import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addFood } from '../actions/pizzaActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'


export default function AddNewFood() {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const[smallprice,setSmallPrice] = useState('')
    const [mediumprice,setMediumPrice] = useState('')
    const [largeprice,setLargePrice]= useState('')
    const [restaurantId,setRestaurantId]= useState('')
    const dispatch = useDispatch()
    const addFoodState=useSelector(state=>state.addFoodReducer)
    const {success, error, loading}=addFoodState
    function formHandler(e) {
        e.preventDefault();
        const food={
            name,
            image,
            description,
            category,
            prices:{
                small:smallprice,
                medium:mediumprice,
                large:largeprice,
            },
            restaurantId,
        }
        console.log(food);
        dispatch (addFood(food));
    }   

    return (
        <div>
            <div className='text-left shadow-lg p-3 mb-5 bg-white rounded'>
                <h1>Add New Food</h1>
                {loading && (<Loading />)}
                {error && (<Error error='Something went wrong'/>)}
                {success && (<Success success='New Food added successfully'/>)}
                <form onSubmit={formHandler}>
                    <input className="form-control" type="text" placeholder="name" value={name} onChange={(e) => { setName(e.target.value) }}></input>
                    <input className="form-control" type="text" placeholder="small price" value={smallprice} onChange={(e) => { setSmallPrice(e.target.value) }}></input>
                    <input className="form-control" type="text" placeholder="medium price" value={mediumprice} onChange={(e) => { setMediumPrice(e.target.value) }}></input>
                    <input className="form-control" type="text" placeholder="large price" value={largeprice} onChange={(e) => { setLargePrice(e.target.value) }}></input>
                    <input className="form-control" type="text" placeholder="image url" value={image} onChange={(e) => { setImage(e.target.value) }}></input>
                    <input className="form-control" type="text" placeholder="description" value={description} onChange={(e) => { setDescription(e.target.value) }}></input>
                    <input className="form-control" type="text" placeholder="category" value={category} onChange={(e) => { setCategory(e.target.value) }}></input>
                    <input className="form-control" type="text" placeholder="restaurant Id" value={restaurantId} onChange={(e) => { setRestaurantId(e.target.value) }}></input>
                    <button className="btn mt-3" type="submit">Add Food</button>
                </form>
            </div>
        </div>
    )
}
