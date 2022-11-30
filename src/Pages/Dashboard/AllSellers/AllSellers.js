import React from 'react';
import { Form } from 'react-router-dom';

const AllSellers = () => {
    return (
        <Form>
            <input type="text" name="img" placeholder="img Link" className="input input-bordered w-full my-2" />
            <input type="text" name="itemName" placeholder="Item Name" className="input input-bordered w-full my-2" />
            <input className='btn btn-accent w-full' type="submit" value="Add Product" />
        </Form>
    );
};

export default AllSellers;