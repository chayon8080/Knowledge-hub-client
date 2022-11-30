import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';

import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData();
    const productsData = products.products;
    const [bookingProduct, setBookingProducrs] = useState(null)
    return (
        <div>
            <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3 my-20'>
                {
                    productsData.map(product => <ProductCard
                        key={product.id}
                        product={product}
                        setBookingProducrs={setBookingProducrs}
                    ></ProductCard>)
                }
            </div>

            {
                bookingProduct &&
                <BookingModal
                    bookingProduct={bookingProduct}
                    setBookingProducrs={setBookingProducrs}
                ></BookingModal>
            }
        </div>

    );
};

export default Products;