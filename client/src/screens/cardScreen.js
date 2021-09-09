import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {addToCard} from "../actions/cardAction";
import {deleteFromCard} from "../actions/cardAction"
import Checkout from '../components/Checkout';
export default function CardScreen() {

        const cardState = useSelector(state=>state.cardReducer)
        const cardItems = cardState.cardItems
        const total = cardItems.reduce((i,item)=> i+item.price,0)
        const dispatch = useDispatch()

    return (
        <div>
            <div className="row justify-content-center">

                <div className="col-md-6">
                    <h2 style={{fontSize:'40px'}}>My Card</h2>

                    {cardItems.map(item=>{
                        return <div className="flex-container">
                        <div style={{textAlign:'left'}} className='m-1 w-100'>
                            <h1> {item.name} [{item.varient}]</h1>
                            <h1> {item.category}</h1>
                            <h1> Price:  {item.quantity} * {item.prices[0][item.varient]}Dt={item.price}Dt</h1>
                            <h1 style={{display:'inline'}}> Quantity : </h1>
                            <i class="fas fa-plus" ariad-hidden="true" onClick={()=>{dispatch(addToCard(item, item.quantity+1 , item.varient))}}></i>
                            <b> {item.quantity}</b>
                            <i class="fas fa-minus" onClick={()=>{dispatch(addToCard(item, item.quantity-1 , item.varient))}}></i>
                            <hr/>
                        </div>
                        <div className='m-2 w-10'>
                            <img  src={item.image} style={{height:'80px' , width:'80px'}} alt=""></img>
                        </div>
                        <div className='m-2 w-10 mt-4'>
                        <i class="fas fa-trash" onClick={()=>{dispatch(deleteFromCard(item))}}></i>
                        </div>
                    </div>
                    })}
                    
                </div>

                <div  className="col-md-4">
                    <h2  style={{fontSize:'30px'}}>subTotal : {total} / DT</h2>
                    <div style={{textAlign:'right', marginRight:'95px'}}> 
                    <Checkout total={total} />
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
