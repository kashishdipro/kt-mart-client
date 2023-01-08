import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({product, setProduct}) => {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const {_id, brand, model, resale_price, seller_name} = product;
    const {user} = useContext(AuthContext);

    const locations = [
        {
            id: 1, city: 'Dhaka'
        },
        {
            id: 2, city: 'Sylhet'
        },
        {
            id: 3, city: 'Chittagong'
        }
    ]

    const handleBook = data =>{
        fetch('https://kt-mart-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                toast.success('Booking Confirmed');
                setProduct(null);
            }else{
                toast.error(data.message);
            }
        })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-neutral">{brand} {model}</h3>
                    <form onSubmit={handleSubmit(handleBook)} className='grid grid-cols-1 gap-4 mt-4'>
                        <input type="text" disabled value={user?.displayName} 
                        {...register("buyer", {value: user?.displayName})}
                        className="input input-bordered input-primary w-full" />
                        <input type="text" disabled value={user?.email} 
                        {...register("email", {value: user?.email})}
                        className="input input-bordered input-primary w-full" />
                        <input hidden type="text" disabled value={_id} 
                        {...register("product_id", {value: _id})}
                        className="input input-bordered input-primary w-full" />
                        <input type="text" disabled value={brand} 
                        {...register("brand", {value: brand})}
                        className="input input-bordered input-primary w-full" />
                        <input type="text" disabled value={model} 
                        {...register("model", {value: model})}
                        className="input input-bordered input-primary w-full" />
                        <input type="text" disabled value={resale_price} 
                        {...register("resale_price", {value: resale_price})}
                        className="input input-bordered input-primary w-full" />
                        <input type="text" disabled value={seller_name} 
                        {...register("seller_name", {value: seller_name})}
                        className="input input-bordered input-primary w-full" />
                        <input type="tel" placeholder='Your Phone Number' 
                        {...register("phone", {required:"Phone number is required"})}
                        className="input input-bordered input-primary w-full" />
                        {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                        <select className="select select-primary w-full" 
                        {...register("location")}>
                            {
                                locations.map(location =><option
                                key={location.id}
                                >{location.city}</option>)
                            }
                        </select>
                        <br />
                        <input type="submit" value="Book" className="btn btn-primary w-full"/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;