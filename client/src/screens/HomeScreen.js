import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pizza from "../components/Pizza"
import { getAllPizzas } from '../actions/pizzaActions'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Filter from '../components/Filter'

export default function HomeScreen() {
    const dispatch = useDispatch()
    const pizzasState = useSelector(state => state.getAllPizzasReducer)
    const params=useParams()
    const { pizzas, error, loading } = pizzasState
    useEffect(() => {
        dispatch(getAllPizzas())
    }, []);


//     useEffect(() => {
 
//         if(user.isAdmin===true) {

//             window.location.href = "/admin"
//         }
//         else{
//             window.location.href = "/"
//         } 
//     })
//     const user= localStorage.getItem('currentUser')
// console.log(user,"deeeeeh")
    return (
        <div>


            <div  className="row justify-content-center">
            <Filter/>
                {loading ? (<Loading/>) : error ? (<Error error="somethig went wrong"/>) : (
                        
                    pizzas.filter(elm=>elm.restaurantId===params.id).map(pizza => {
                        return <div   key={pizza._id} className="col-md-3 m-3">
                            <div >
                            
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                    })

                )}

            </div>

        </div>
    )
}
