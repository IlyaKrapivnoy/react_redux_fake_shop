import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productsActions';
import ProductComponent from './ProductComponent';

const ProductPage = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                dispatch(setProducts(data));
            } catch (err) {
                console.log('Err: ', err);
            }
        };

        fetchProducts();
    }, [dispatch]);

    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    );
};

export default ProductPage;
