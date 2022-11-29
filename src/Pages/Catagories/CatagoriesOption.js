import React from 'react';
import { Link } from 'react-router-dom';

const CatagoriesOption = ({ productCatagory }) => {
    const { title, img, _id } = productCatagory
    return (
        <div className="card card-compact w-96 bg-green-200 p-5 shadow-xl">
            <figure><img className='w-80 h-80 rounded-md' src={img} alt="" /></figure>
            <div className="card-body place-items-center">
                <h2 className="card-title text-blue-500">{title}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/categories/${_id}`}><button className="btn btn-secondary text-zinc-200">See Products</button></Link>
                </div>
            </div>
        </div>


    );
};

export default CatagoriesOption;