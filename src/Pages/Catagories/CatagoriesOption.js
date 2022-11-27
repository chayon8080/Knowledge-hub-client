import React from 'react';
import { Link } from 'react-router-dom';

const CatagoriesOption = ({ productCatagory }) => {
    const { title, img, _id } = productCatagory
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-80 h-80' src={img} alt="" /></figure>
            <div className="card-body place-items-center">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/catagories/${_id}`}><button className="btn btn-secondary">See Products</button></Link>
                </div>
            </div>
        </div>


    );
};

export default CatagoriesOption;