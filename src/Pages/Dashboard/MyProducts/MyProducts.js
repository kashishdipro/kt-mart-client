import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FaTrashAlt } from 'react-icons/fa';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    const {data: products = []} = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/products?seller_email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    console.log(products);
    return (
        <section className='m-4'>
            <h2 className='text-2xl text-neutral font-medium mb-4'>My Products</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, idx) =><tr key={product._id}>
                                <th>{idx+1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={product.img} alt="Phone" />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">{product.brand} {product.model}</div>
                                        <div className="text-sm opacity-50">{product.resale_price}</div>
                                        </div>
                                    </div>
                                </td>
                                <td><button className='btn btn-xs btn-outline btn-primary'>{product.status}</button></td>
                                <td><button className='text-red-700 hover:text-red-900 p-2'><FaTrashAlt/></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyProducts;