import React,{ useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {filterPizzas} from '../actions/pizzaActions'

export default function Filter() {

    const dispatch = useDispatch()
    const [searchKey,setSearchKey] = useState('')
    const [category,setCategory] = useState('all')

    console.log(searchKey)
    
  


    return (
        <div>
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">

                <div className="col-md-3">
                    <input
                    onChange={(e)=>{setSearchKey(e.target.value)}}
                     value={searchKey} type="text" className="form-control w-100" placeholder='search food'></input>
                </div>

                <div className="col-md-3">
                    <select onChange={(e)=>{setCategory(e.target.value)}} value={category} className="form-control w-100">
                        <option value="all">All</option>
                        <option value="sandwich">Sandwich</option>
                        <option value="makloub">Makloub</option>
                        <option value="pizza">Pizza</option>
                    </select>
                </div>

                <div className="col-md-3">
                    <button className="btn w-100" onClick={()=>{dispatch(filterPizzas(searchKey,category))}}  >
                        FILTER 
                    </button>
                </div>

            </div>
        </div>
    )
}
