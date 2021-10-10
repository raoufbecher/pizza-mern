import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import {addToCard} from '../actions/cardAction'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init(
    {duration:1500}
);

export default function Pizza({ pizza }) {

    AOS.init()
    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState('small')
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
    function addtocard()
    {
        dispatch(addToCard(pizza,quantity,varient))
    }

    return (
        <div data-aos='zoom-in'  className='shadow-lg p-3 mb-5 bg-white rounded' key={pizza._id}>

            <div  onClick={handleShow}>
            <h1>{pizza.name}</h1>
            <img src={pizza.image} className="img-fluid" style={{ height: "200px", width: "200px" }} alt='pizza' />
            </div>

            <div className="flex-container">
                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select className="form-control" value={varient} onChange={(e) => { setVarient(e.target.value) }}>
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>

                <div className="w-100 m-1">
                    <p> Quantity </p>
                    <select className="form-control" value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>

            </div>

            <div className="flex-container">
                <div className="m-1 w-100">
                    <h1 className="mt-3">Price :{pizza.prices[0][varient] * quantity} DT</h1>
                </div>

                <div className="m-1 w-100">
                    <button className="btn mt-1" onClick={addtocard}>Add to card</button>
                </div>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{textAlign:'center'}}>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image}  className="img-fluid" style={{height:'400px' , width:'400px', display:'block', margin: 'auto'}}></img>
                    <p style={{textAlign:'center'}}>{pizza.description}</p>
                    <p style={{textAlign:'center'}}>{pizza.category}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
