import {
TOGGLE_CART
} from '../actions/cartActions'


interface State {
    loading: boolean,
    cart: boolean,
    error: string
  }

export const initialState: State = {
    loading: false,
    cart: false,
    error: ""
  };

/**
 * @desc 
 * @param state state that is shared 
 * @param action action from the store
 */

export const cartReducer = (state = initialState, action) => {
    switch(action.type){
      case TOGGLE_CART: {
        return{...state, cart:!state.cart}
      }

        default:
            return state;
        }
    }

   
