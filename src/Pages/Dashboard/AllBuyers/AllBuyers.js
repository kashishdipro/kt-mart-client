import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';

const Dashboard = () => {
    const {data: buyers = [], refetch} = useQuery({
        queryKey: ['buyers'],
        queryFn: async() =>{
            const res = await fetch('https://kt-mart-server.vercel.app/users/buyers');
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteBuyer = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this user');
        if(proceed){
            fetch(`https://kt-mart-server.vercel.app/users/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    toast.success('Deleted Successfully!');
                    refetch();
                }
            })
        }
    }
    
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, idx) =><tr key={buyer._id}>
                                <th>{idx+1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><button onClick={() =>handleDeleteBuyer(buyer._id)} className='text-red-700 hover:text-red-900 p-2'><FaTrashAlt/></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Dashboard;