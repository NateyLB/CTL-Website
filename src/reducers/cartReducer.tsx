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

interface State {
    loading: boolean,
    cart: Array<Products>,
    error: string
  }

export const initialState: State = {
    loading: false,
    cart: [],
    error: ""
  };

/**
 * @desc 
 * @param state state that is shared 
 * @param action action from the store
 */

export const cartReducer = (state = initialState, action) => {
    switch(action.type){


        default:
            return state;
        }
    }

   
