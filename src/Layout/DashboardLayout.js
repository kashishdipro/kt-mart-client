import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const DashboardLayout = () => {
    return (
        <div>
            <NavBar/>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet/>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 bg-secondary-content text-neutral">
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link>All Sellers</Link></li>
                    <li><Link>All Buyers</Link></li>
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;