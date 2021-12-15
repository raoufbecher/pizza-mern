import React, { useState, useEffect } from "react";
import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import { useDispatch, useSelector } from "react-redux";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "../App.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { logoutUser } from "../actions/userActions";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const cardState = useSelector((state) => state.cardReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [userFb, setUserFb] = useState(
    JSON.parse(localStorage.getItem("profileFacebook"))
  );
  const dispatch = useDispatch();

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 4,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <div>
      <nav
        style={{ justifyContent: "space-between" }}
        className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded"
      >
        <a className="navbar-brand" href="/">
          <div className="kmandi">k'mandi</div>
        </a>

        <div className="" id="">
          <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
            {currentUser || user || userFb ? (
              <div className="dropdown">
                <DropdownButton
                  size="sm"
                  title={
                    currentUser?.name || user?.result?.name || userFb?.result
                  }
                >
                  <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <li>logout</li>
                  </Dropdown.Item>
                  {currentUser && currentUser.isAdmin ? (
                    <Dropdown.Item href="/admin">
                      <li>Admin Panel</li>{" "}
                    </Dropdown.Item>
                  ) : (
                    <div></div>
                  )}
                  {/* <Dropdown.Item href="/admin">  {currentUser && currentUser.isAdmin? <li>Admin Panel</li>: <div></div> } </Dropdown.Item> */}
                </DropdownButton>
              </div>
            ) : (
              <li style={{ marginTop: "11px" }} className="inscri">
                <a className="inscription" href="/login">
                  Se connecter/S'inscrire{" "}
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/card">
                <IconButton aria-label="cart">
                  <Badge
                    className="pannier"
                    badgeContent={
                      cardState.cardItems.length 
                    }
                    color="secondary"
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>

                {/* <i className="pannier fas fa-shopping-basket">
                  <div className="pannier-notification">
                    {cardState.cardItems.length == 0 ? (
                      <div></div>
                    ) : (
                      cardState.cardItems.length
                    )}
                  </div>
                </i>{" "} */}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
