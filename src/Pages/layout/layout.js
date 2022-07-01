import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import BillingPage from '../BillingPage/BillingPage';

const Layout = () => {
    const [billings, setBillings] = useState([])
    const [total, setTotal] = useState(0)
    const [isReload, setIsReload] = useState(false)
    useEffect(() => {
        fetch('https://p-hero-rk.herokuapp.com/api/billing-list')
            .then(res => res.json())
            .then(data => setBillings(data))
    }, [isReload])

    useEffect(() => {

        const amount = billings.map(b => parseInt(b.amount))
        if (amount) {
            const reducer = (accumulator, curr) => accumulator + curr;
            setTotal(amount.reduce(reducer, 0))

        }
    }, [billings])

    return (
        <div>
            <header className='px-16 bg-gray-600'>
                <div className="navbar">
                    <div className="navbar-start">
                        <Link to='/' className="text-white text-xl font-bold">Logo</Link>
                    </div>
                    <div className="navbar-end">
                        <h3 className='text-white text-lg font-semibold'>Total Paid: ${total}</h3>
                    </div>
                </div>
            </header >
            <div className=''>
                <BillingPage setIsReload={setIsReload} isReload={isReload} />
            </div>
        </div >
    );
};

export default Layout;