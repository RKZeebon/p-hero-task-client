import React from 'react';

const BillingData = ({ billing, handleSelecting }) => {

    const { _id: id, name, email, phone, amount } = billing


    return (
        <tr>
            <th className='text-center'>{id.slice(-10)}</th>
            <td className='text-center'>{name}</td>
            <td className='text-center'>{email}</td>
            <td className='text-center'>{phone}</td>
            <td className='text-center'>{amount}</td>
            <td className='text-center'><button
                onClick={() => handleSelecting({ id, isUpdating: true })}
                className='btn btn-sm'>Edit</button> | <button
                    onClick={() => handleSelecting({ id, isDeleting: true })}
                    className='btn btn-sm bg-red-600 border-none'>Delete</button></td>
        </tr>
    );
};

export default BillingData;