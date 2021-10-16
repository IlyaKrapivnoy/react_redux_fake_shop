import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useEffect } from 'react';
import { setProducts } from '../redux/actions/productActions';

const ProductList = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log(err);
            });
        dispatch(setProducts(response.data));
    };

    console.log('Products:', products);
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    );
};

export default ProductList;
