import React, { useState, useEffect } from "react";
import restaurants from "../data/restorantData";
import Restaurants from "../components/Restaurants";
import { useHistory } from "react-router-dom";
import Filter from "../components/Filter";
import UsersList from "./UsersList";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactComponent from "./ContactComponent";
export default function RestosScreen() {
  const history = useHistory();
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

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
      <div className="entry-message">
        Pour passer une commande, Appeler nous au: 52550523 &nbsp;&nbsp;
        <PhoneIcon sx={{ fontSize: 22 }} className="mb-1" />
      </div>
      <div style={{ marginLeft: "12%", marginRight: "12%" }} className="row">
        {restaurants.map((restaurant) => {
          return (
            <div className="col-md-3">
              <div>
                <Restaurants restaurant={restaurant} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="row justify-content-center ">
        <ContactComponent />
      </div>
    </div>
  );
}
