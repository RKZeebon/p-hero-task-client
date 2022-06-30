import React from 'react';

const AddBilling = ({ setAddModal, handleAddBlling }) => {


    return (
        <div className='absolute flex items-center justify-center left-16 right-16 bottom-0 top-0  bg-black/70 z-50'>
            <form onSubmit={handleAddBlling} class="form-control w-5/6 lg:w-1/3 p-8 bg-white rounded">

                <label class="label">
                    <span class="label-text">Full Name:</span>
                </label>
                <input name='name' type="text" placeholder="Name" class="input input-bordered w-full mb-4" required />

                <label class="label">
                    <span class="label-text">Email:</span>
                </label>
                <input name='email' type="email" placeholder="Email" class="input input-bordered w-full mb-4" required />

                <label class="label">
                    <span class="label-text">Phone Number:</span>
                </label>
                <input name='phone' type="text" placeholder="Phone Number" class="input input-bordered w-full mb-4" required />

                <label class="label">
                    <span class="label-text">Amount:</span>
                </label>
                <input name='amount' type="text" placeholder="Amount" class="input input-bordered w-full mb-4" required />

                <input className='btn bg-green-600 hover:bg-green-400 hover:text-black mb-2' type="submit" value="Add" />
                <button onClick={() => setAddModal(false)} className='btn bg-red-600 hover:bg-red-400 hover:text-black' >Cancel</button>
            </form>
        </div>
    );
};

export default AddBilling;