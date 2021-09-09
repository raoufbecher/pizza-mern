import React from 'react'
import restos from '../data/restorantData'
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init(
    {duration:1600}
);
export default function Restaurant({restaurant}) {
    return (
<>

        <div data-aos='zoom-in'  className='shadow-lg p-3 mb-5 bg-white rounded'>

         
                <Link className='line' to={`/food/${restaurant._id}`}>
            <h1 className='resto'>{restaurant.name}</h1>
            <img src={restaurant.image} className="img-fluid" style={{ height: "200px", width: "200px" }} alt='' />
    
            </Link>

        </div>
        </>
    )
}
