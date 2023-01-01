import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';

const AllSellers = () => {
    const {data: sellers = [], refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users/sellers');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeVerified = id =>{
        const proceed = window.confirm('Are you sure, you want to verify this seller');
        if(proceed){
            fetch(`http://localhost:5000/users/sellers/${id}`, {
                method: 'PUT'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.modifiedCount > 0){
                    toast.success('Make Verify Successful')
                    refetch();
                }
            })
        }
    }

    const handleDeleteSeller = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this user');
        if(proceed){
            fetch(`http://localhost:5000/users/${id}`, {
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
            <h2 className='text-2xl text-neutral font-medium mb-4'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verified</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, idx) =><tr key={seller._id}>
                                <th>{idx+1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.genuine_seller === true && <p className='mx-2'><TiTick className='text-blue-600'/></p>} {seller.genuine_seller !== true && <button onClick={() =>handleMakeVerified(seller._id)} className="btn btn-primary btn-sm">Make Verify</button>}</td>
                                <td><button onClick={() =>handleDeleteSeller(seller._id)} className='text-red-700 hover:text-red-900 p-2'><FaTrashAlt/></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllSellers;