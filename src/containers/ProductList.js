import React, { useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productsActions';
import ProductComponent from './ProductComponent';

const ProductPage = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = () => {
        return async (dispatch) => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                dispatch(setProducts(response.data));
            } catch (err) {
                console.log('Err: ', err);
            }
        };
    };


    useEffect(() => {
        const fetchProductsAndCleanup = async () => {
            await fetchProducts();
        };

        fetchProductsAndCleanup();
    }, [fetchProducts]);

    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    );
};

export default ProductPage;
