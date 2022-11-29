import React from 'react';
import { Link } from 'react-router-dom';
import { CiLocationOn, CiUser } from "react-icons/ci";
const ProductCard = ({ product }) => {
    const { id, name, img, location, sellerName, resalePrice, orginalPrice, yearsOfUse, postedTime } = product
    return (
        <div className="card card-compact w-96 bg-green-200 p-5 shadow-xl max-w-[1440px] mx-auto">
            <figure><img className='w-80 h-80 rounded-md' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl product-title text-blue-500">{name}</h2>
                <div className='grid grid-cols-2 products-details'>
                    <p className='flex text-blue-500'><CiUser className='mr-1'></CiUser>{sellerName}</p>
                    <p className='flex text-blue-500'><CiLocationOn className='mr-1 text-green-900'></CiLocationOn>{location}</p>
                </div>
                <div className='grid grid-cols-2 products-details text-blue-500'>
                    <p>Resale Price: {resalePrice}</p>
                    <p>Original Price: {orginalPrice}</p>
                </div>
                <div className='grid grid-cols-2 products-details text-blue-500'>
                    <p>Using Time: {yearsOfUse}</p>
                    <p>Posted: {postedTime}</p>
                </div>
                <div className="card-actions">
                    <label htmlFor="booking-modal" className="btn">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;