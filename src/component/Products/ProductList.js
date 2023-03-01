import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/productCart/actionCreator';

const ProductList = ({product}) => {
    const cart = useSelector((state) => state.cart
    )
    const cartId=cart.map(cartId => cartId._id)
    
    const dispatch = useDispatch();
    return (
        <div class="lws-productCard">
            <img class="lws-productImage" src={product.imageUrl} alt="product" />
            <div class="p-4 space-y-2">
                <h4 class="lws-productName">{product.Pname}</h4>
                <p class="lws-productCategory">{product.category}</p>
                <div class="flex items-center justify-between pb-2">
                    <p class="productPrice">BDT <span class="lws-price">{product.price}</span></p>
                    <p class="productQuantity">Qun <span class="lws-quantity">{product.quantity}</span></p>
                </div>
                {cartId?<button class="lws-btnAddToCart" onClick={() => dispatch(addToCart(product))}>Add To Cart</button>:<p>All readu Added</p>}
            </div>
        </div>
    );
};

export default ProductList;