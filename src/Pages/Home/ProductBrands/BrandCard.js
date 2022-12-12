import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({brand}) => {
    const {name} = brand;
    return (
        <Link to={`/brand/${name}`} className="card bg-neutral text-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
            </div>
        </Link>
    );
};

export default BrandCard;