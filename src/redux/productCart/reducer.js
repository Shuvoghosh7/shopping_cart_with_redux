import { ADD_PRODUCT, ADD_TO_CART, DELETE, QUANTITYDECREMENT, QUANTITYINCREMENT } from "./actionType";
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
               /*  products: state.products.map(product => {
                    console.log(product)
                    if (product._id === action.payload.productId) {
                        return {
                            ...product,
                            quantity: +product.quantity - 1
                        }
                    }
                    return product
                }), */
                cart: [...state.cart, action.payload],
            }
        case QUANTITYINCREMENT:
            const { itemId, quantity } = action.payload;
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item._id === itemId) {
                        return {
                            ...item,
                            quantity: +quantity + 1
                        }
                    }
                    return item
                })
            }
        case QUANTITYDECREMENT:
            const { ditemId, dquantity } = action.payload;
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item._id === ditemId) {
                        return {
                            ...item,
                            quantity: +dquantity - 1
                        }
                    }
                    return item
                })
            }
        case DELETE:
            return{
                ...state,
                cart: state.cart.filter((item)=>item._id !== action.payload)
            }
        default:
            return state;
    }

}

export default reducer;