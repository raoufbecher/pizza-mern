export const addToCard = (pizza, quantity, varient,category) => (dispatch, getState) => {

    var cardItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        varient: varient,
        quantity: quantity,
        prices: pizza.prices,
        price: pizza.prices[0][varient] * quantity,
        category:category,
        description: pizza.description,
    }

    if (cardItem.quantity>10)
    {
        alert('maximum est 10 pieces')
    }

    else{
        if (cardItem.quantity<1)
        {
            dispatch({type: 'DELETE_FROM_CARD', payload:pizza})
        }
        else{
        dispatch({ type: 'ADD_TO_CARD', payload: cardItem })
        }
    }
    
        const cardItems= getState().cardReducer.cardItems
        localStorage.setItem('cardItems', JSON.stringify(cardItems))
}

export const deleteFromCard=(pizza)=>(dispatch, getState)=>{
    
    dispatch({type: 'DELETE_FROM_CARD', payload:pizza})
    const cardItems= getState().cardReducer.cardItems
    localStorage.setItem('cardItems', JSON.stringify(cardItems))
}