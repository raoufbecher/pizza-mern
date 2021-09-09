import axios from 'axios';
export const getAllPizzas = () => async dispatch => {
    dispatch({ type: 'GET_PIZZAS_REQUEST' })
    try {
        const response = await axios.get('/api/pizzas/getallpizzas')
        console.log(response);
        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: response.data })
    }
    catch (error) {
        dispatch({ type: 'GET_PIZZAS_FAILED', payload: error })
    }
}

export const getFoodById = (foodid) => async dispatch => {
    dispatch({ type: 'GET_FOOD_BY_ID_REQUEST' })
    try {
        const response = await axios.post('/api/pizzas/getfoodbyid', { foodid })
        console.log(response);
        dispatch({ type: 'GET_FOOD_BY_ID_SUCCESS', payload: response.data })
    }
    catch (error) {
        dispatch({ type: 'GET_FOOD_BY_ID_FAILED', payload: error })
    }
}

export const filterPizzas = (searchKey, category) => async dispatch => {
    var filteredPizzas;
    dispatch({ type: 'GET_PIZZAS_REQUEST' })
    try {
        const response = await axios.get('/api/pizzas/getallpizzas')
        filteredPizzas = response.data.filter(pizza => pizza.name.toLowerCase().includes(searchKey))

        if (category !== 'all') {
            filteredPizzas = response.data.filter(pizza => pizza.category.toLowerCase() == category)
        }


        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: filteredPizzas })
    }
    catch (error) {
        dispatch({ type: 'GET_PIZZAS_FAILED', payload: error })
    }
}

export const addFood = (food) => async dispatch => {
    dispatch({ type: "ADD_FOOD_REQUEST" })
    try {
        const response = await axios.post('/api/pizzas/addfood', { food })
        console.log(response);
        dispatch({ type: "ADD_FOOD_SUCCESS" })
    } catch (error) {
        dispatch({ type: "ADD_FOOD_FAILED", payload: error })
    }
}

export const editpizza = (editedpizza) => async dispatch => {
    dispatch({ type: "EDIT_FOOD_REQUEST" })
    try {
        const response = await axios.post('/api/pizzas/editfood', { editedpizza })
        console.log(response);
        dispatch({ type: "EDIT_FOOD_SUCCESS" })
        window.location.href = '/admin/foodlist'

    } catch (error) {
        dispatch({ type: "EDIT_FOOD_FAILED", payload: error })
    }
}

export const deletePizza = (pizzaid) => async dispatch => {
    try {
        const response = await axios.post('/api/pizzas/deletepizza', { pizzaid })
        alert('Pizza deleted successfully')
        console.log(response)
        window.location.reload()
    } catch (error) {
        alert('Something went wrong')
        console.log(error)
    }
}