import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const[isBuyer] = useBuyer(user?.email);
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
                    { isBuyer && <>
                        <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                    </>}
                        <li><Link to='/dashboard/addaproduct'>Add A Product</Link></li>
                        <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                    { isAdmin && <>
                        <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                        <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                        <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
                    </>}
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;