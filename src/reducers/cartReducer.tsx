import {
ADD_TO_CART,
REMOVE_FROM_CART
} from '../actions/cartActions'

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
  
  interface Products extends Array<Product> { }
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
 * @desc 
 * @param state state that is shared 
 * @param action action from the store
 */

export const cartReducer = (state = initialState, action) => {
    switch(action.type){

      case ADD_TO_CART: {
        return{...state, cart:[...state.cart, action.payload]}
      }

      case REMOVE_FROM_CART: {
        let newCart=[]
        for (const product of state.cart){
            if (product !== state.cart[action.payload]){
                newCart.push(product)
                console.log(product, "reducer")
            }
        }
        return{...state, cart: newCart}
      }

        default:
            return state;
        }
    }

   
