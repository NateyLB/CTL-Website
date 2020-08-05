import {
VERIFY_ADDRESS_START,
VERIFY_ADDRESS_SUCCESS,
VERIFY_ADDRESS_FAILURE
} from '../actions/checkoutActions'

export const initialState = {
    loading: false,
    card: {},
    address: {},
    error: ''
}

/**
 * @desc reducer for checkout info, card and shipping
 * @param state state that is shared 
 * @param action action from the store
 */


export const checkoutReducer = (state= initialState, action) => {
    switch(action.type) {

        case VERIFY_ADDRESS_START: {
            console.log(VERIFY_ADDRESS_START)
            return({...state, loading: true})
        }

        case VERIFY_ADDRESS_SUCCESS: {
            console.log(VERIFY_ADDRESS_SUCCESS)
            return({...state, loading:false , address: {
                ...action.payload.address, 
                name: action.payload.name,
                email: action.payload.email
            }
            }
                )}

        case VERIFY_ADDRESS_FAILURE: {
            console.log(VERIFY_ADDRESS_FAILURE)
            return({...state, loading:false, error: action.payload})
        }

        default:
            return state;
    }

}