import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Loading from '../components/Loading'
import Success from '../components/Success'
import Error from '../components/Error'


export default function Ordersscreen() {

    const dispatch = useDispatch()
    const orderstate = useSelector(state => state.getUserOrdersReducer)
    const { orders, error, loading } = orderstate
    useEffect(() => {

        dispatch(getUserOrders())
    }, [])
    return (
        <div>
            <h2 style={{ fontSize: '35px' }}> My Orders</h2>
            <div className="row justify-content-center">
                {loading && (<Loading />)}
                {error && (<Error error='Something went wrong while loading' />)}
                {orders && orders.map(order => {
                    return <div className="col-md-8 m-2 p-1" style={{backgroundColor:'rgba(255, 0, 0, 0.719)' , color:'white'}}>

                        <div className="flex-container">

                            <div style={{textAlign:'center'}} className="w-100 m-1">
                                <h2 style={{fontSize: '25px' }}>Items</h2> <hr></hr>
                                {order.orderItems.map(item=>{
                                    return <div className=""> 
                                    <p>{item.name} [{item.varient}]* {item.quantity} </p>
                                    </div>
                                })}
                            </div>

                            <div style={{textAlign:'center'}} className="w-100 m-1">
                            <h2 style={{fontSize: '25px' }}>Address</h2> <hr></hr>
                            <p > Street: {order.shippingAddress.street} </p>
                            <p> City: {order.shippingAddress.city} </p>
                            </div>

                            <div style={{textAlign:'center'}} className="w-100 m-1">
                            <h2 style={{fontSize: '25px' }}>Order info</h2> <hr/>
                                <p>Order amount: {order.orderAmount} Dt</p>
                                <p>Date: {order.createdAt.substring(0,10)} at {order.createdAt.substring(11,16)}</p>
                            </div>
                            
                        </div>

                    </div>
                    
                })}
            </div>
        </div>
    )
}
