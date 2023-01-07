import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({idx, booking}) => {
    const {_id, brand, model, resale_price} = booking;

    const [product, setProduct] = useState([])
    useEffect(() =>{
        axios.get(`http://localhost:5000/product/${booking?.product_id}`)
        .then(data =>{
            setProduct(data.data);
        })
    }, [booking?.product_id]);
    return (
        <tr>
            <th>{idx+1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={product?.img} alt="Product_Image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{brand} {model}</div>
                        <div className="text-sm">Phone No.: {product?.seller_phone}</div>
                    </div>
                </div>
            </td>
            {/* <td className="font-bold">{brand} {model}</td> */}
            <td className="text-sm opacity-50">BDT {resale_price}</td>
            <td>
                {booking?.paid ? <p className='text-green-600'>Paid</p> :
                <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-primary btn-sm">Pay</button></Link>}
            </td>
        </tr>
    );
};

export default OrderRow;