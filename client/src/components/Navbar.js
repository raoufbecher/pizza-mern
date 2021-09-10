import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {logoutUser} from '../actions/userActions'

export default function Navbar() {
    const cardState = useSelector(state => state.cardReducer)
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState
    const dispatch = useDispatch()
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/">Commander vos repas</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i style={{color:"black"}} className="fas fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
                        {currentUser ? (
                            <div className="dropdown mt-1">
                                
                            <DropdownButton size="sm" title={currentUser.name}>
                                <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></Dropdown.Item>
                            </DropdownButton>
                            </div>

                        ) : (
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login </a>
                            </li>)}

                        <li className="nav-item">
                            <a className="nav-link" href="/card">Card {cardState.cardItems.length} </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
