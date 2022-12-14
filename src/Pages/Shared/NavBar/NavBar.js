import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from '../../../img/logo.png'

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
    }
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        {user?.uid && <li><Link to='/myorders'>My Orders</Link></li>}
        <li><Link to='/blogs'>Blogs</Link></li>
        {user?.uid ? 
        <li><button onClick={handleLogOut}>Logout</button></li>
        :<li><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <nav className="navbar justify-between bg-neutral-content text-neutral">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-neutral-content font-semibold">
                    {menuItems}
                </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl font-bold px-0 gap-2">
                    <img className='h-12' src={logo} alt="Logo" />
                    <h2 className='text-neutral'>KT Mart</h2>
                </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal p-0 text-neutral font-semibold">
                    {menuItems}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;