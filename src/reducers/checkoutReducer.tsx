export const initialState = {
    loading: false,
    card: {},
    address: {}
}

/**
 * @desc reducer for checkout info, card and shipping
 * @param state state that is shared 
 * @param action action from the store
 */


export const checkoutReducer = (state= initialState, action) => {
    switch(action.type){

        default:
            return state;
    }

}