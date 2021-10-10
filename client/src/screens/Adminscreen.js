import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FoodList from './FoodList'
import OrdersList from './OrdersList'
import UsersList from './UsersList'
import AddNewFood from './AddNewFood'
import {Switch,Route} from 'react-router'
import { Link } from 'react-router-dom';
import EditScreen from './EditScreen'

export default function Adminscreen() {
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState
    const dispatch = useDispatch()

    useEffect(() => {
        if (!currentUser.isAdmin) {
            window.location.href = '/'
        }
      
    }, [])

    return (
        <div>

            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>
                    <ul className="adminfunction">
                        <li ><Link to={"/admin/userslist"}>Users List</Link></li>
                        <li><Link to={"/admin/foodlist"}>Food List</Link></li>
                        <li><Link to={"/admin/addnewfood"}>Add new Food</Link></li>
                        <li><Link to={"/admin/orderslist"}>Orders List</Link></li>
                    </ul>
                
                    <Switch>
                    <Route path="/admin" component ={UsersList} exact/>
                    <Route path="/admin/userslist" component ={UsersList} exact/>
                    <Route path="/admin/orderslist" component ={OrdersList} exact/>
                    <Route path="/admin/foodlist" component ={FoodList} exact/>
                    <Route path="/admin/addnewfood" component={AddNewFood} exact/>
                    <Route path="/admin/editfood/:foodid" component={EditScreen} exact/>
                    </Switch>

                </div>
            </div>



        </div>
    )
}
