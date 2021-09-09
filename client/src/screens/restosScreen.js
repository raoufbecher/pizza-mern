import React from 'react'
import restaurants from '../data/restorantData'
import Restaurants from "../components/Restaurants"
import Filter from '../components/Filter'
export default function restosScreen() {
    return (
        <div>
            
            <div className="row">

                {restaurants.map(restaurant => {
                    return <div className="col-md-4" >
                        <div>
                            <Restaurants restaurant={restaurant} />
                        </div>
                    </div>
                })}

            </div>
            <hr/>
            <div className="row justify-content-center">
                <h6 className="col-md-6" style={{ fontSize: "50px" }}> Inscrivez vous en tant que vendeur</h6>
                <h5>Envoyez simplement un mail à: raouf-94@live.fr</h5> 
            </div>

        </div>
    )
}
