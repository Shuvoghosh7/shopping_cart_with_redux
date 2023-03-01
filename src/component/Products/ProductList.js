import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/productCart/actionCreator';

const ProductList = ({product}) => {
    const dispatch = useDispatch();
    return (
        <div class="lws-productCard">
            <img class="lws-productImage" src={product.imageUrl} alt="product" />
            <div class="p-4 space-y-2">
                <h4 class="lws-productName">{product.Pname}</h4>
                <p class="lws-productCategory">{product.category}</p>
                <div class="flex items-center justify-between pb-2">
                    <p class="productPrice">BDT <span class="lws-price">400</span></p>
                    <p class="productQuantity">Qun <span class="lws-quantity">{product.quantity}</span></p>
                </div>
                <button class="lws-btnAddToCart" onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductList;