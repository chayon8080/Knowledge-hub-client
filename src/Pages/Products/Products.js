import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';

import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData();
    console.log(products)
    const productsData = products.products;
    return (
        <div>
            <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3 my-20'>
                {
                    productsData.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <BookingModal></BookingModal>
        </div>

    );
};

export default Products;