import React from 'react';

const UpdateBilling = ({ setUpdateModal, selectedBill }) => {
    const { _id: id, name, email, phone, amount } = selectedBill

    let errorMessage;
    const handleUpdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const phone = e.target.phone.value
        const amount = e.target.amount.value

        fetch(`https://p-hero-rk.herokuapp.com/api/update-billing/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                amount
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setUpdateModal(false)
                }
                else {
                    errorMessage = "Something went wrong. Please try again later."
                }
            });

    }
    return (
        <div className='absolute flex items-center justify-center left-16 right-16 bottom-0 top-0  bg-black/70 z-50'>
            <form onSubmit={handleUpdate} className="form-control w-5/6 lg:w-1/3 p-8 bg-white rounded">

                <label className="label">
                    <span className="label-text">Full Name:</span>
                </label>
                <input
                    name='name'
                    type="text"
                    defaultValue={name}
                    className="input input-bordered w-full mb-4"
                    required />

                <label className="label">
                    <span className="label-text">Email:</span>
                </label>
                <input
                    name='email'
                    type="email"
                    defaultValue={email}
                    className="input input-bordered w-full mb-4"
                    required />

                <label className="label">
                    <span className="label-text">Phone Number:</span>
                </label>
                <input
                    name='phone'
                    type="text"
                    defaultValue={phone}
                    className="input input-bordered w-full mb-4"
                    required />

                <label className="label">
                    <span className="label-text">Amount:</span>
                </label>
                <input
                    name='amount'
                    type="text"
                    defaultValue={amount}
                    className="input input-bordered w-full mb-4"
                    required />

                <div className='text-lg font-semibold text-red-600 mb-2'>{errorMessage}</div>
                <input
                    className='btn bg-green-600 hover:bg-green-400 hover:text-black mb-2'
                    type="submit"
                    value="Update"
                />
                <button
                    className='btn bg-red-600 hover:bg-red-400 hover:text-black'
                    onClick={() => setUpdateModal(false)}
                >Cancel</button>
            </form>
        </div>
    );
};

export default UpdateBilling;