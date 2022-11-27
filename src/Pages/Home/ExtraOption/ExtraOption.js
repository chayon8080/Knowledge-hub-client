import React from 'react';
import { Link } from 'react-router-dom';

const ExtraOption = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 overflow-hidden mt-5 pl-20'>
            <div className="card w-96 bg-green-200 text-blue-900 shadow-xl">
                <div className="card-body">
                    <Link to='/'><h2 className="card-title">Reading Rewords</h2></Link>
                    <Link to='/'><p>Join now to earn FREE BOOKS </p></Link>
                </div>
            </div>
            <div className="card w-96 bg-green-200 text-blue-900 shadow-xl">
                <div className="card-body">
                    <Link to='/'><h2 className="card-title">ThriftBooks Deals</h2></Link>
                    <Link to='/'><p>Save up to 20% on any eligible itme </p></Link>
                </div>
            </div>
            <div className="card w-96 bg-green-200 text-blue-900 shadow-xl">
                <div className="card-body">
                    <Link to='/'><h2 className="card-title">Mobile App</h2></Link>
                    <Link to='/'><p>Shop faster and earn bonus points</p></Link>
                </div>
            </div>

        </div>
    );
};

export default ExtraOption;