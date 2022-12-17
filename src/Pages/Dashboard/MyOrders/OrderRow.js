import React from 'react';

const OrderRow = ({idx, booking}) => {
    const {brand, model, resale_price} = booking;
    return (
        <tr>
            <th>{idx+1}</th>
            <td className="font-bold">{brand} {model}</td>
            <td className="text-sm opacity-50">BDT {resale_price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Pay</button>
            </th>
        </tr>
    );
};

export default OrderRow;