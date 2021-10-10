import React, { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getFoodById,editpizza } from '../actions/pizzaActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'
export default function EditScreen({match}) {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [smallprice,setSmallPrice] = useState('')
    const [mediumprice,setMediumPrice] = useState('')
    const [largeprice,setLargePrice]= useState('')
    const [restaurantId,setRestaurantId]= useState('')

    const getfoodbyidstate= useSelector(state=>state.getFoodByIdReducer)
    const{pizza,loading,error} = getfoodbyidstate
    const editfoodstate= useSelector(state=>state.editFoodReducer)
    const {editloading,editerror,editsuccess}=editfoodstate
    useEffect(() => {

        if (pizza)
        {
            if (pizza._id==match.params.foodid)
            {
                setName(pizza.name)
                setCategory(pizza.category)
                setDescription(pizza.description)
                setImage(pizza.image)
                setSmallPrice(pizza.prices[0]['small'])
                setMediumPrice(pizza.prices[0]['medium'])
                setLargePrice(pizza.prices[0]['large'])
                setRestaurantId(pizza.restaurantId)
            }else{
                dispatch(getFoodById(match.params.foodid))  
            }
        } else {
            dispatch(getFoodById(match.params.foodid))  

        }
        
    }, [pizza , dispatch])

    function formHandler(e) {
        e.preventDefault();
        const editedpizza={
            _id:match.params.foodid,
            name,
            image,
            description,
            category,
            prices:{
                small:smallprice,
                medium:mediumprice,
                large:largeprice
            },
            restaurantId,
        };
        dispatch(editpizza(editedpizza))        
    } 
    return (
        <div>
            {/* <h1>Food Id:{match.params.foodid} </h1> */}
            <div className='text-left shadow-lg p-3 mb-5 bg-white rounded'>
            <h4>Edit food</h4>
            {loading && <Loading />}
            {error && (<Error error='Something went wrong'/>)}
            {editsuccess && (<Success success='Food details updated successfully' />)}
            {editloading && (<Loading />)}

               
                <form onSubmit={formHandler}>
                    <input className="form-control" type="text" placeholder="name" value={name} onChange={(e) => { setName(e.target.value) }}></input>
                    <input className="form-control" type="text" placeholder="small price" value={smallprice} onChange={(e) => { setSmallPrice(e.target.value) }}></input>
                    <input className="form-control" type="text" placeholder="medium price" value={mediumprice} onChange={(e) => { setMediumPrice(e.target.value) }}></input>
                    <input className="form-control" type="text" placeholder="large price" value={largeprice} onChange={(e) => { setLargePrice(e.target.value) }}></input>
                    <input className="form-control" type="text" placeholder="image url" value={image} onChange={(e) => { setImage(e.target.value) }}></input>
                    <input className="form-control" type="text" placeholder="description" value={description} onChange={(e) => { setDescription(e.target.value) }}></input>
                    <input className="form-control" type="text" placeholder="category" value={category} onChange={(e) => { setCategory(e.target.value) }}></input>
                    <input className="form-control" type="text" placeholder="restaurant Id" value={restaurantId} onChange={(e) => { setRestaurantId(e.target.value) }}></input>
                    <button className="btn mt-3" type="submit">Edit Food</button>
                </form>
            </div>
        </div>
    )
}
