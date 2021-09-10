import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { registerUser } from '../actions/userActions'
import Loading from '../components/Loading'
import Success from '../components/Success'
import Error from '../components/Error'

export default function RegisterScreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const registerState=useSelector(state=>state.registerUserReducer)
    const {error, loading, success} =registerState

    const dispatch=useDispatch()

    function register() {
        const user={
            name,
            email,
            password,
        }
        console.log(user)
        dispatch (registerUser(user))

    }
    return (
        <div className='register'>
            <div className="row justify-content-center">
                <div style={{ textAlign: 'left' }} className="col-md-5 mt-5">

                    {loading && (<Loading/>)}
                    {success && (<Success success='user register succefully'/>) }
                    {error && (<Error error="Password should be more then 6 caracters and email should be valid" />)}
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Register</h2>
                    <div >
                        <input style={{ marginTop: '10px', boxShadow: 'none' }} type="text" placeholder="name" className="form-control" required value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        <input style={{ marginTop: '10px', boxShadow: 'none' }} type="text" placeholder="email" className="form-control" required  value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        <input style={{ marginTop: '10px', boxShadow: 'none' }} type="password" placeholder="password" className="form-control" required value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        
                        <button onClick={register} className="btn mt-3">REGISTER</button>
                        
                    </div>

                </div>

            </div>
        </div>
    )
}
