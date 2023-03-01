import { ADD_PRODUCT, ADD_TO_CART, QUANTITYDECREMENT, QUANTITYINCREMENT, REMOVE_PRODUCT } from "./actionType"


export const addProduct=(value)=>{
    return{
        type:ADD_PRODUCT,
        payload:value
    }
}
export const addToCart=(product)=>{
    return{
        type:ADD_TO_CART,
        payload:product
    }
}
export const removeProduct=(productId)=>{
    return{
        type:REMOVE_PRODUCT,
        payload:productId
    }
}

export const quantityIncrement=( itemId,quantity)=>{
    return{
        type: QUANTITYINCREMENT,
        payload: {
            itemId,
            quantity
          },
    }
}

export const quantityDecrement=(ditemId,dquantity)=>{
    return{
        type: QUANTITYDECREMENT,
        payload: {
            ditemId,
            dquantity
          },
    }
}