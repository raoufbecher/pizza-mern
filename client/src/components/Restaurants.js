import React from 'react'
import restos from '../data/restorantData'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init(
    { duration: 1600 }
);
export default function Restaurant({ restaurant }) {
    return (
        <>



            <Link className='line' to={`/food/${restaurant._id}`}>
                <div className="container">
                    <div data-aos='zoom-in' className='p-3 mb-5 rounded'>
                        <div className="card">
                            <div className='imgBx'>
                                <img src={restaurant.image} alt='' />
                            </div>
                            <div className="content">

                                <a className="restoname">{restaurant.name}</a>
                                <hr/>
                                <div>
                                <i class="fas fa-phone"> {  restaurant.phone} </i>
                                <p>{restaurant.temps} </p>                                
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Link>

        </>
    )
}
