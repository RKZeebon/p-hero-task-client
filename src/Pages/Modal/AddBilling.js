import React from 'react';

const AddBilling = ({ setOpenModal }) => {
    return (
        <div className='absolute flex items-center justify-center left-16 right-16 bottom-0 top-0  bg-black/70 z-50'>
            <div class="form-control w-5/6 lg:w-1/3 p-8 bg-white rounded">

                <label class="label">
                    <span class="label-text">Full Name:</span>
                </label>
                <input type="text" placeholder="Name" class="input input-bordered w-full mb-4" />

                <label class="label">
                    <span class="label-text">Email:</span>
                </label>
                <input type="email" placeholder="Email" class="input input-bordered w-full mb-4" />

                <label class="label">
                    <span class="label-text">Phone Number:</span>
                </label>
                <input type="text" placeholder="Phone Number" class="input input-bordered w-full mb-4" />

                <label class="label">
                    <span class="label-text">Amount:</span>
                </label>
                <input type="text" placeholder="Amount" class="input input-bordered w-full mb-4" />

                <input className='btn bg-green-600 hover:bg-green-400 hover:text-black mb-2' type="submit" value="Add" />
                <button onClick={() => setOpenModal(false)} className='btn bg-red-600 hover:bg-red-400 hover:text-black' >Cancel</button>
            </div>
        </div>
    );
};

export default AddBilling;