import React, { useEffect, useState } from 'react';
import CatagoriesOption from './CatagoriesOption';

const Catagories = () => {
    const [productCatagories, setProductCatagories] = useState([])
    useEffect(() => {
        fetch('catagories.json')
            .then(res => res.json())
            .then(data => setProductCatagories(data))
    }, [])

    const handleSeeProducts = () => {

    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 overflow-hidden mt-5'>
            {
                productCatagories.map(productCatagory => <CatagoriesOption
                    key={productCatagory.id}
                    productCatagory={productCatagory}
                ></CatagoriesOption>)
            }
        </div>
    );
};

export default Catagories;