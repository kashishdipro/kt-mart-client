import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const {data: sellers = []} = useQuery({
        queryKey: ['sellers'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users/sellers');
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className='m-4'>
            <h2 className='text-2xl text-neutral font-medium mb-4'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, idx) =><tr key={seller._id}>
                                <th>{idx+1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllSellers;