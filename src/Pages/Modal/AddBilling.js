import React from 'react';

const AddBilling = ({ setAddModal, handleAddBlling }) => {


    return (
        <div className='absolute flex items-center justify-center left-16 right-16 bottom-0 top-0  bg-black/70 z-50'>
            <form onSubmit={handleAddBlling} className="form-control w-5/6 lg:w-1/3 p-8 bg-white rounded">

                <label className="label">
                    <span className="label-text">Full Name:</span>
                </label>
                <input name='name' type="text" placeholder="Name" className="input input-bordered w-full mb-4" required />

                <label className="label">
                    <span className="label-text">Email:</span>
                </label>
                <input name='email' type="email" placeholder="Email" className="input input-bordered w-full mb-4" required />

                <label className="label">
                    <span className="label-text">Phone Number:</span>
                </label>
                <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full mb-4" required />

                <label className="label">
                    <span className="label-text">Amount:</span>
                </label>
                <input name='amount' type="text" placeholder="Amount" className="input input-bordered w-full mb-4" required />

                <input className='btn bg-green-600 hover:bg-green-400 hover:text-black mb-2' type="submit" value="Add" />
                <button onClick={() => setAddModal(false)} className='btn bg-red-600 hover:bg-red-400 hover:text-black' >Cancel</button>
            </form>
        </div>
    );
};

export default AddBilling;