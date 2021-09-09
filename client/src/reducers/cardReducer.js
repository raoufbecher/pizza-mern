export const cardReducer = (state={cardItems:[]}, action ) => {

        switch (action.type)
        {
            case 'ADD_TO_CARD': 
            
            const alreadyExists= state.cardItems.find(item=> item._id===action.payload._id)
            
            if (alreadyExists) 
            {
                    return {
                        ...state,
                        cardItems: state.cardItems.map(item=>item._id===action.payload._id? action.payload: item )
                    }
            }
            else 
         {
            return {
                ...state,
                cardItems:[ ...state.cardItems, action.payload]
            }

        }
            case 'DELETE_FROM_CARD': return{
                ...state,
                cardItems:state.cardItems.filter(item=>item._id !== action.payload._id)
        }
         default : return state
        }
}