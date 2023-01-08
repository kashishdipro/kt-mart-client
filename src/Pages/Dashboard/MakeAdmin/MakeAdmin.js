import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const MakeAdmin = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://kt-mart-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id =>{
        const proceed = window.confirm('Are you sure, you want to make this user as a admin');
        if(proceed){
            fetch(`https://kt-mart-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                toast.success('Make Admin Successful')
                refetch();
            }
        })
        }
    }

    return (
        <section className='m-4'>
            <h2 className='text-2xl text-neutral font-medium mb-4'>Make Admin</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) =><tr key={user._id}>
                                <th>{idx+1}</th>
                                <td>{user.name} ({user?.role})</td>
                                <td>{user.email}</td>
                                <td>{ user?.role !== 'admin' && <button onClick={() =>handleMakeAdmin(user._id)} className="btn btn-primary btn-sm">Make Admin</button>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MakeAdmin;