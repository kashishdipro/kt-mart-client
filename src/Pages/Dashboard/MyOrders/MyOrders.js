import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const {user} = useContext(AuthContext);

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className='m-4'>
            {
                bookings?.length !== 0 ?
                <>
                <h2 className='text-2xl text-neutral font-medium mb-4'>My Orders</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Title</th>
                                <th>Product Price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings?.map((booking, idx) =><OrderRow
                                key={idx}
                                idx={idx}
                                booking={booking}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
                </>
                :
                <div className='flex items-center justify-center'>
                    <h2 className='text-red-500 md:text-2xl text-xl font-bold'>No Order Found</h2>
                </div>
            }
            
        </section>
    );
};

export default MyOrders;