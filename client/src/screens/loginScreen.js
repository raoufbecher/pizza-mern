import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { getAllUsers } from "../actions/userActions";
import Google from "../images/google.png";
import Facebook from "../images/facebook.png";
import Github from "../images/github.png";
import "../assets/login.css";
import Divider from "@mui/material/Divider";
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginState = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginState;
  const dispatch = useDispatch();

  const userstate = useSelector((state) => state.getAllUsersReducer);
  const { users } = userstate;

  // useEffect(() => {
  //   dispatch(getAllUsers());

  //   if (users.isAdmin == true) {
  //     window.location.href = "/admin";
  //   }
  // }, []);

  // useEffect(() => {

  //     if(user.isAdmin===true) {
  //         history.push('/admin')
  //     }
  // })

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div className="login1">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google">
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook">
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github">
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center1">
          <div className="line11" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <div className="right">
            {loading && <Loading />}
            {error && <Error error="Invalid inputs" />}
            <div className="right">
              <input
                type="text"
                placeholder="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button className="submit" onClick={login}>
                LOGIN
              </button>
              <div className="line11" />
              <br />
              <br />
            </div>
          </div>
          <div>
            <a href="/register">
              <button className="submit">Sign up</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
