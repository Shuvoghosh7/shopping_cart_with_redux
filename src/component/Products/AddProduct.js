import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/productCart/actionCreator';

const AddProduct = () => {
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault()
        const Pname = e.target.Pname.value;
        const category = e.target.category.value;
        const imageUrl = e.target.imageUrl.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const data={
            Pname,
            category,
            imageUrl,
            price,
            quantity
        }
        dispatch(addProduct(data))
    }
    return (
        <div>
            <div class="formContainer">
                <h4 class="formTitle">Add New Product</h4>
                <form class="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={submit}>

                    <div class="space-y-2">
                        <label for="lws-inputName">Product Name</label>
                        <input class="addProductInput" id="lws-inputName" name='Pname' type="text" required />
                    </div>

                    <div class="space-y-2">
                        <label for="lws-inputCategory">Category</label>
                        <input class="addProductInput" id="lws-inputCategory" name='category' type="text" required />
                    </div>

                    <div class="space-y-2">
                        <label for="lws-inputImage">Image Url</label>
                        <input class="addProductInput" id="lws-inputImage" name='imageUrl' type="text" required />
                    </div>

                    <div class="grid grid-cols-2 gap-8 pb-4">

                        <div class="space-y-2">
                            <label for="ws-inputPrice">Price</label>
                            <input class="addProductInput" type="number" id="lws-inputPrice" name='price' required />
                        </div>

                        <div class="space-y-2">
                            <label for="lws-inputQuantity">Quantity</label>
                            <input class="addProductInput" type="number" id="lws-inputQuantity" 
                            name='quantity'
                            required />
                        </div>
                    </div>

                    <button type="submit" id="lws-inputSubmit" class="submit">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;