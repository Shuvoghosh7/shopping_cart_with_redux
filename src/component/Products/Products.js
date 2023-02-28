import React from 'react';
import AddProduct from './AddProduct';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const Products = () => {
    const products = useSelector((state) => state.products
    )
    const dispatch = useDispatch();
   
    return (
        <main class="py-16">
            <div class="productWrapper">
                {/* show product in ui */}
                <div class="productContainer" id="lws-productContainer">
                    {
                        products?.map(product =>
                            <div class="lws-productCard">
                                <img class="lws-productImage" src={product.imageUrl} alt="product" />
                                <div class="p-4 space-y-2">
                                    <h4 class="lws-productName">{product.Pname}</h4>
                                    <p class="lws-productCategory">{product.category}</p>
                                    <div class="flex items-center justify-between pb-2">
                                        <p class="productPrice">BDT <span class="lws-price">400</span></p>
                                        <p class="productQuantity">Qun <span class="lws-quantity">{product.quantity}</span></p>
                                    </div>
                                    <button  class="lws-btnAddToCart" onClick={()=>dispatch()}>Add To Cart</button>
                                </div>
                            </div>
                        )
                    }


                </div>
                {/* Add New Product From */}
                <div>
                    <AddProduct />
                </div>
            </div>
        </main>
    );
};

export default Products;