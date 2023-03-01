import { ADD_PRODUCT, ADD_TO_CART, QUANTITYINCREMENT } from "./actionType";
import initialState from "./initialState";


const reducer = (state = initialState, action) => {
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
        case QUANTITYINCREMENT:
            const {  itemId,quantity } = action.payload;
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item._id === itemId) {
                        return {
                            ...item,
                            quantity:+quantity + 1
                        }
                    }
                    return item
                })
            }

        default:
            return state;
    }

}

export default reducer;