import { ADD_PRODUCT, ADD_TO_CART, QUANTITYDECREMENT } from "./actionType";
import initialState from "./initialState";


const reducer = (state = initialState, action) => {
    const selectedProduct = state.cart.find(
        (product) => product
    );
  
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, { ...action.payload, _id: JSON.stringify(Math.random()) }]
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            }
        case QUANTITYDECREMENT: {
            
            return {
                ...state,
                cart: [...state, state.cart.quantity + 1],
            }
        }
        default:
            return state;
    }

}

export default reducer;