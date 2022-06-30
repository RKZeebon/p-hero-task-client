import React from 'react';

const DeleteModal = ({ setDeleteModal, selectedBill }) => {
    const { _id: id } = selectedBill

    const handleDelete = () => {
        fetch(`http://localhost:5000/api/delete-billing/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setDeleteModal(false)
                }
            })
    }
    return (
        <div className='absolute flex items-center justify-center left-16 right-16 bottom-0 top-0  bg-black/70 z-50'>
            <div class="w-5/6 lg:w-1/4 p-8 bg-white rounded">
                <h2 className='text-xl font-semibold text-red-600 mb-4'>Are You Sure? You want to delete this billing?</h2>
                <h2 className='text-xl font-semibold mb-12'>Billing Id: <span className='font-bold'>{id.slice(-10)}</span></h2>
                <button
                    onClick={handleDelete}
                    className='mr-2 btn bg-red-600 hover:bg-red-400 hover:text-black'
                >Delete</button>
                <button
                    onClick={() => setDeleteModal(false)}
                    className='ml-2 btn bg-green-600 hover:bg-green-400 hover:text-black'
                >Cancel</button>
            </div>
        </div>
    );
};

export default DeleteModal;