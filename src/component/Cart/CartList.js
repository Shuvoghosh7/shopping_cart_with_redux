import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quantityIncrement } from '../../redux/productCart/actionCreator';

const CartList = ({ product }) => {
    const productCart = useSelector((state) => state.cart
    )
    const dispatch=useDispatch()
    const { Pname, category, imageUrl, price, quantity, _id } = product
    
    const handleClick = () => {
        quantityIncrement(dispatch(_id, quantity + 1))
      }
    return (
        <div>
            <div class="cartCard">
                <div class="flex items-center col-span-6 space-x-6">
                    {/* <!-- cart image --> */}
                    <img class="lws-cartImage" src={imageUrl} alt="product" />
                    {/* <!-- cart item info --> */}
                    <div class="space-y-2">
                        <h4 class="lws-cartName">{Pname}</h4>
                        <p class="lws-cartCategory">{category}</p>
                        <p>BDT <span class="lws-cartPrice">{price}</span></p>
                    </div>
                </div>
                <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                    {/* <!-- amount buttons --> */}
                    <div class="flex items-center space-x-4">
                        <button class="lws-incrementQuantity" onClick={()=>dispatch(quantityIncrement(_id,quantity))}>
                            <i class="text-lg fa-solid fa-plus"></i>
                        </button>
                        <span class="lws-cartQuantity">{quantity}</span>
                        <button class="lws-decrementQuantity">
                            <i class="text-lg fa-solid fa-minus"></i>
                        </button>
                    </div>
                    {/* <!-- price --> */}
                    <p class="text-lg font-bold">BDT <span class="lws-calculatedPrice">{price}</span></p>
                </div>
                {/* <!-- delete button --> */}
                <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                    <button class="lws-removeFromCart">
                        <i class="text-lg text-red-400 fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default CartList;