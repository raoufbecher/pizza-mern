import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzasReducer,addFoodReducer,getFoodByIdReducer, editFoodReducer } from './reducers/pizzaReducers';
import {cardReducer} from './reducers/cardReducer';
import { registerUserReducer, loginUserReducer,getAllUsersReducer,loginAdminReducer } from './reducers/userReducer';
import { placeOrderReducer, getUserOrdersReducer,getAllOrdersReducer } from './reducers/orderReducer';

const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer  , 
    cardReducer : cardReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer : placeOrderReducer,
    getUserOrdersReducer : getUserOrdersReducer,
    addFoodReducer : addFoodReducer,
    getFoodByIdReducer : getFoodByIdReducer,
    editFoodReducer : editFoodReducer,
    getAllOrdersReducer : getAllOrdersReducer,
    getAllUsersReducer: getAllUsersReducer,
    // loginAdminReducer: loginAdminReducer,
})

const cardItems= localStorage.getItem('cardItems') ? JSON.parse(localStorage.getItem('cardItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')): null
const initState={
    cardReducer:{
        cardItems: cardItems
    },
    loginUserReducer:{
        currentUser:currentUser
    }
}
const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer, initState, composeEnhancers(applyMiddleware(thunk)) )

export default store;