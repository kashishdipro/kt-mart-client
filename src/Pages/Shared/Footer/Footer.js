import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 bg-neutral-content text-base-content">
            <div>
                <p>Copyright © 2022 - All right reserved by <Link className='font-medium' to='/'>KT Mart</Link></p>
            </div>
        </footer>
    );
};

export default Footer;