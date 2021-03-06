import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";
import Alert from '@mui/material/Alert';
export default function Checkout({ total }) {
  
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const userState = useSelector((state) => state.loginUserReducer);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [userFb, setUserFb] = useState(
    JSON.parse(localStorage.getItem("profileFacebook"))
  );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cardItems"))
  );
  const { currentUser } = userState;
  console.log(cart);

  function tokenHandler(token) {
    if ((currentUser || user || userFb) && (total>0)) {
      dispatch(placeOrder(token, total));
    } else if (!(currentUser || user || userFb) && (total>0)) {
      
      alert("you have to login first");
      window.location.href = "/login";
    } else if ((currentUser || user || userFb) && (total==0))
    { 
      alert("you have to add something to the cart");
      window.location.href = "/"
    }
      else {
        alert('you have to login and add something to the cart')
        window.location.href = "/login";
      }
  }

  // function tokenHandler(token) {
  //   ((currentUser || user || userFb) && cart[0]?.price > 0)
  //     ? dispatch(placeOrder(token, total))
  //     :
  //     <Alert severity="warning">you have to login first</Alert>
  //   window.location.href = "/login";
  // }
  //   function tokenHandler() {
  //     if (currentUser != null) {
  //       dispatch(placeOrder(total));
  //     } else {
  //       window.location.href = "/login";
  //     }
  //   }

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your order placed successfully" />}

      <StripeCheckout
        amount={total * 100}
        shippingAddress
        token={tokenHandler}
        currency="TND"
        stripeKey="pk_test_51JOqIBGHjxmyDd1kLexp8m3aY6hBdcZdN6LtRScF4IX2e5tioKqq8s2Ed4S9MyPOU6EcvQEPSVKd2kQfbG2h5xzS00NVRocqz0"
      >
        <button className="btn" onClick={tokenHandler}>
          Commander
        </button>
      </StripeCheckout>
    </div>
  );
}
