import React from 'react';
import { Link } from 'react-router-dom';
import { CiLocationOn, CiUser } from "react-icons/ci";
const ProductCard = ({ product }) => {
    const { id, name, img, location, sellerName, resalePrice, orginalPrice, yearsOfUse, postedTime } = product
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl max-w-[1440px] mx-auto">
            <figure><img className='w-2/3' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl product-title">{name}</h2>
                <div className='grid grid-cols-2 products-details'>
                    <p className='flex'><CiUser className='mr-1'></CiUser>{sellerName}</p>
                    <p className='flex'><CiLocationOn className='mr-1 text-green-900'></CiLocationOn>{location}</p>
                </div>
                <div className='grid grid-cols-2 products-details'>
                    <p>Resale Price: {resalePrice}</p>
                    <p>Original Price: {orginalPrice}</p>
                </div>
                <div className='grid grid-cols-2 products-details'>
                    <p>Using Time: {yearsOfUse}</p>
                    <p>Posted: {postedTime}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link>
                        <button className="mr-5 bg-black py-3 px-4 text-white products-btn">Book Now</button>
                        <label htmlFor="booking-modal" className="btn">open modal</label>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;