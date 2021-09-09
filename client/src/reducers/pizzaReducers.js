export const getAllPizzasReducer = (state={pizzas:[]}, action)=>{

    switch(action.type)
    {
        case 'GET_PIZZAS_REQUEST' : return {
            loading:true,
            ...state
        }
     
        case 'GET_PIZZAS_SUCCESS' : return {
            loading:false,
            pizzas : action.payload
        }
        
        case 'GET_PIZZAS_FAILED' : return {
            error:action.payload,
            loading:false
        }
        
        default: return state
    
    }
}

export const getFoodByIdReducer = (state={ }, action)=>{

    switch(action.type)
    {
        case 'GET_FOOD_BY_ID_REQUEST' : return {
            loading:true,
            ...state
        }
     
        case 'GET_FOOD_BY_ID_SUCCESS' : return {
            loading:false,
            pizza : action.payload
        }
        
        case 'GET_FOOD_BY_ID_FAILED' : return {
            error:action.payload,
            loading:false
        }
        
        default: return state
    
    }
}


export const addFoodReducer = (state={ }, action)=>{

    switch(action.type)
    {
        case 'ADD_FOOD_REQUEST' : return {
            loading:true,
            ...state
        }
     
        case 'ADD_FOOD_SUCCESS' : return {
            loading:false,
            success:true,
        }
        
        case 'ADD_FOOD_FAILED' : return {
            error:action.payload,
            loading:false
        }
        
        default: return state
    
    }

}

export const editFoodReducer = (state={ }, action)=>{

    switch(action.type)
    {
        case 'EDIT_FOOD_REQUEST' : return {
            editloading:true,
            ...state
        }
     
        case 'EDIT_FOOD_SUCCESS' : return {
            editloading:false,
            editsuccess:true,
        }
        
        case 'EDIT_FOOD_FAILED' : return {
            editerror:action.payload,
            editloading:false
        }
        
        default: return state
    
    }

}