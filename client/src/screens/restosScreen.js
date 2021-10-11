import React,{ useState, useEffect} from 'react'
import restaurants from '../data/restorantData'
import Restaurants from "../components/Restaurants"
import { useHistory } from 'react-router-dom';
import Filter from '../components/Filter'
import UsersList from './UsersList'
import { useSelector, useDispatch } from 'react-redux'
export default function RestosScreen() {
const history=useHistory();
const userState = useSelector(state => state.loginUserReducer)
const { currentUser } = userState


    // useEffect(() => {
 
    //     if(userState && userState.currentUser && userState.currentUser.isAdmin==="true") {

    //        history.push('/admin/')
    //     }
    //     else{
    //         history.push('/')
    //     } 
    // },[currentUser])
 
    return (
        <div>
           
            <div style={{maxWidth: '100vw'}} className="row">

                {restaurants.map(restaurant => {
                    return <div  className="col-md-4" >

                        <div>
                            <Restaurants restaurant={restaurant} />
                        </div>
                    </div>
                })}

            </div>
            <hr/>
            <div className="row justify-content-center ">
                <h6 className="col-md-6 " style={{ fontSize: "50px" }}> Inscrivez vous en tant que vendeur</h6>
                <h5>Envoyez simplement un mail à: raouf-94@live.fr</h5> 
            </div>

        </div>
    )
}
