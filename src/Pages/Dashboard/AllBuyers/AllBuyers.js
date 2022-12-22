import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Dashboard = () => {
    const {data: buyers = []} = useQuery({
        queryKey: ['buyers'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users/buyers');
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className='m-4'>
            <h2 className='text-2xl text-neutral font-medium mb-4'>All Buyers</h2>
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
                            buyers.map((buyer, idx) =><tr key={buyer._id}>
                                <th>{idx+1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Dashboard;