import { ADD_PRODUCT, ADD_TO_CART } from "./actionType";
import initialState from "./initialState";


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products,{...action.payload,_id:JSON.stringify(Math.random())}]
            }
        case ADD_TO_CART:
            return{
                
            }
        default:
            return state;
    }

}

export default reducer;