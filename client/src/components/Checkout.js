import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch, useSelector} from 'react-redux'
import {placeOrder} from '../actions/orderActions'
import Loading from '../components/Loading'
import Success from '../components/Success'
import Error from '../components/Error'



export default function Checkout({total}) {
    const dispatch = useDispatch()
    const orderstate=useSelector((state)=>state.placeOrderReducer)
    const {loading, error, success}=orderstate
    const userState = useSelector(state => state.loginUserReducer)

    const { currentUser } = userState
    console.log(currentUser,"sj")
    function tokenHandler(token) {
       if(currentUser!=null){
        dispatch(placeOrder(token, total))
    }
    else{
        window.location.href="/login"
    }
}
function tokenHandler() {
    if(currentUser!=null){
     dispatch(placeOrder(total))
 }
 else{
     window.location.href="/login"
 }
}

    return (
        <div>
            {loading && (<Loading/>)}
            {error && (<Error error="Something went wrong"/>)}
            {success && (<Success success="Your order placed successfully"/>)}

            <StripeCheckout
            amount = {total*100}
            shippingAddress
            token={tokenHandler}
            currency='TND'
            stripeKey='pk_test_51JOqIBGHjxmyDd1kLexp8m3aY6hBdcZdN6LtRScF4IX2e5tioKqq8s2Ed4S9MyPOU6EcvQEPSVKd2kQfbG2h5xzS00NVRocqz0'
            >
                <button className="btn" onClick={tokenHandler}>Commander</button>
            </StripeCheckout>
        </div>
    )
}
