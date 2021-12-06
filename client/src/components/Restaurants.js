import React from "react";
import restos from "../data/restorantData";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Divider from "@mui/material/Divider";
AOS.init({ duration: 1600 });
export default function Restaurant({ restaurant }) {
  return (
    <>
      <Link className="line" to={`/food/${restaurant._id}`}>
        <div className="container">
          <div data-aos="zoom-in" className="rounded">
            <div className="card">
              <div>
                <Divider />
              </div>
              <div className="imgBx">
                <img src={restaurant.image} alt="" />
              </div>

              <div className="content">
                <div className="restoname">
                  {restaurant.name}
                  <i className="fas fa-phone"> {restaurant.phone} </i>
                  <p>{restaurant.temps} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
