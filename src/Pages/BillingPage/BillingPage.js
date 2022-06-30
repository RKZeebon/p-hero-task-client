import React, { useEffect, useState } from 'react';
import AddBilling from '../Modal/AddBilling';
import BillingData from './BillingData';

const BillingPage = () => {
    const [openModal, setOpenModal] = useState(false)
    const [billings, setBllings] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/api/billing-list')
            .then(res => res.json())
            .then(data => setBllings(data))
    }, [])


    return (
        <div className='mx-16'>

            {
                openModal && <AddBilling setOpenModal={setOpenModal} />
            }

            <div className='flex justify-between items-center bg-gray-400 px-5 mt-8 rounded'>
                <div className="flex justify-between items-center">
                    <div className="mr-5">
                        <p className="text-xl font-semibold">Bllings</p>
                    </div>
                    <div className="">
                        <input type="text" placeholder="Search" className="p-1 input-bordered rounded" />
                    </div>
                </div>
                <div className="">
                    <button onClick={() => setOpenModal(true)} className="btn my-1">Add new billing</button>
                </div>

            </div>

            {/* Table */}
            <div className='mt-4'>
                <div class="overflow-x-auto">
                    <table class="table table-zebra w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th className='text-center'>Blling ID</th>
                                <th className='text-center'>Full Name</th>
                                <th className='text-center'>Email</th>
                                <th className='text-center'>Phone</th>
                                <th className='text-center'>Paid Amount</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            {
                                billings.map(b => <BillingData
                                    key={b._id}
                                    billing={b} />)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BillingPage;