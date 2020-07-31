import {
ADD_TO_CART,
REMOVE_FROM_CART,
UPDATE_PRODUCT_QUANTITY
} from '../actions/cartActions'
import { unmountComponentAtNode } from 'react-dom';

interface Size {
    id: number,
    product_id: number,
    size: string,
  }

interface Product {
    product_id: number,
    name: string,
    item_type: number,
    description: string,
    color: string,
    size: Size,
    price: number,
    quantity: number,
  }
  
  interface Products extends Array<Product> {
    product_id: any;
    size: any;
}
//if there is a cart in local storage, grab contents and add to cart reducer
let cart = [];
if (localStorage.getItem("cart")){
  cart = JSON.parse(localStorage.getItem("cart"))
} 
interface State {
    loading: boolean,
    cart: Array<Products>,
    error: string
  }



export const initialState: State = {
    loading: false,
    cart: cart,
    error: ""
  };

/**
 * @desc reducer for shopping cart
 * @param state state that is shared 
 * @param action action from the store
 */

export const cartReducer = (state = initialState, action) => {
    switch(action.type){

      case ADD_TO_CART: {
        let updated = false;
        let newCart=[];
        for (const product of state.cart){
          if( product.product_id === action.payload.product_id && product.size.id === action.payload.size.id ){
            product.size.quantity += action.payload.size.quantity
            updated = true
          } 
          newCart.push(product)
        }
        if(updated === false){
          newCart.push(action.payload)
        }
        
        return{...state, cart: newCart}
      }

      case REMOVE_FROM_CART: {
        let newCart=[]
        for (const product of state.cart){
            if (product !== state.cart[action.payload]){
                newCart.push(product)
            }
        }
        return{...state, cart: newCart}
      }

      case UPDATE_PRODUCT_QUANTITY: {
        let newCart=[]
        for (const product of state.cart){
          if (product === state.cart[action.payload.index]){
              product.size.quantity = action.payload.quantity
          }
          newCart.push(product)
      }
      return{...state, cart: newCart}
      }

        default:
            return state;
        }
    }

   
