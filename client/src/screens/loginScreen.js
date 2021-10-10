
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions'
import Loading from '../components/Loading'
import Success from '../components/Success'
import Error from '../components/Error'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {getAllUsers } from '../actions/userActions'


export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginState = useSelector(state => state.loginUserReducer)
    const { loading, error } = loginState
    const dispatch = useDispatch()

    const userstate=useSelector(state => state.getAllUsersReducer)
    const {users}= userstate

    useEffect(() => {
        dispatch (getAllUsers())

        if (users.isAdmin==true) {
            window.location.href = "/admin"
        }
    }, [])
    
    // useEffect(() => {

    //     if(user.isAdmin===true) {
    //         history.push('/admin')
    //     }
    // })

        

    function login() {
        const user = { email, password }
        dispatch(loginUser(user))

    }

    return (
        <div className="login"> 
        <div className=" col-md-5 shadow-lg p-3 bg-white rounded" style={{ width: '700px', margin: "10% 25% 25% 25%" }}>
            <div className="row justify-content-center">
                <div style={{ textAlign: 'center' }} className="col-md-5 mt-5">
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Login</h2>
                    {loading && (<Loading />)}
                    {error && (<Error error='Invalid inputs' />)}
                    <div >
                        <input style={{ marginTop: '10px', boxShadow: 'none' }} type="text" placeholder="email" className="form-control" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input style={{ marginTop: '10px', boxShadow: 'none' }} type="password" placeholder="password" className="form-control" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <button onClick={login} className="btn mt-3">LOGIN</button>
                        <br />
                        <br />

                    </div>

                </div>

            </div>
            
                <a href="/register" className="">
                    <button className="signup">Sign up</button>
                </a>
                
            
        </div>
        </div>
    )
}
