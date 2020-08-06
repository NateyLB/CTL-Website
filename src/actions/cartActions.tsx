export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY'
export const CLEAR_CART = 'CLEAR_CART'



export const addToCart = (product) => dispatch => {
    dispatch({type: ADD_TO_CART, payload: product})
}

export const removeFromCart = index => dispatch => {
    dispatch({type: REMOVE_FROM_CART, payload: index})
}

export const updateProductQuantity = (index, quantity) => dispatch => {
    dispatch({type: UPDATE_PRODUCT_QUANTITY, payload: {index: index, quantity: quantity}})
}

export const clearCart = () => dispatch => {
    dispatch({type: CLEAR_CART})
}

