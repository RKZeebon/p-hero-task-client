import React from 'react';
import { Link } from "react-router-dom";
import BillingPage from '../BillingPage/BillingPage';

const layout = () => {

    let total;
    return (
        <div>
            <header className='px-16 bg-gray-400'>
                <div className="navbar">
                    <div className="navbar-start">
                        <Link to='/' className="text-xl font-bold">Logo</Link>
                    </div>
                    <div className="navbar-end">
                        <h3 className='text-lg font-semibold'>Total Paid: {total}</h3>
                    </div>
                </div>
            </header >
            <BillingPage />
        </div >
    );
};

export default layout;