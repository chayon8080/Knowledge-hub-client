import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Form } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ bookingProduct, setBookingProducrs }) => {
    console.log(bookingProduct)
    const { name, resalePrice } = bookingProduct
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const itemName = form.itemName.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const booking = {
            name, price, itemName, phone, location, email
        }

        fetch('https://knowledge-hub-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setBookingProducrs(null);
                    toast.success('Booking confirmed');
                }
                else {
                    toast.error(data.message)
                }
            })

    }

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
                    <Form onSubmit={handleBooking}>
                        <input type="text" name="name" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered w-full my-2" />
                        <input type="email" name="email" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full my-2" />
                        <input type="text" name="itemName" placeholder="Item Name" defaultValue={name} className="input input-bordered w-full my-2" />
                        <input type="text" name="price" placeholder="Price" defaultValue={resalePrice} className="input input-bordered w-full my-2" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full my-2" />
                        <input type="text" name="location" placeholder="Location" className="input input-bordered w-full my-2" />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </Form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
