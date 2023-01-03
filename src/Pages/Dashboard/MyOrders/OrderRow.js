import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({idx, booking}) => {
    const {_id, brand, model, resale_price} = booking;
    return (
        <tr>
            <th>{idx+1}</th>
            <td className="font-bold">{brand} {model}</td>
            <td className="text-sm opacity-50">BDT {resale_price}</td>
            <td>
                <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-primary btn-sm">Pay</button></Link>
            </td>
        </tr>
    );
};

export default OrderRow;