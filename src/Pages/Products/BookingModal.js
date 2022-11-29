import React from "react";
import { Form } from "react-router-dom";

const BookingModal = ({ setProductModal }) => {
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <Form>
                        <input type="text" placeholder="Name" className="input input-bordered w-full my-2" />
                        <input type="email" placeholder="Email" className="input input-bordered w-full my-2" />
                        <input type="text" placeholder="Item Name" className="input input-bordered w-full my-2" />
                        <input type="text" placeholder="Price" className="input input-bordered w-full my-2" />
                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full my-2" />
                        <input type="text" placeholder="Location" className="input input-bordered w-full my-2" />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </Form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
