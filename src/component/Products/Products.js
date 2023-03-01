import React from 'react';
import AddProduct from './AddProduct';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
const Products = () => {
    const products = useSelector((state) => state.products
    )
    return (
        <main class="py-16">
            <div class="productWrapper">
                {/* show product in ui */}
                <div class="productContainer" id="lws-productContainer">
                    {
                        products?.map(product => <ProductList product={product}/>)
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