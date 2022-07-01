import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import AddBilling from '../Modal/AddBilling';
import DeleteModal from '../Modal/DeleteModal';
import UpdateBilling from '../Modal/UpdateBilling';
import BillingData from './BillingData';

const BillingPage = ({ setIsReload, isReload }) => {
    const [addModal, setAddModal] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [selectedBill, setSelectedBill] = useState({})
    const [billings, setBllings] = useState([])
    const [totalItem, setTotalItem] = useState(0)
    const [selectedPage, setSelectedPage] = useState(0)
    const pageCount = Math.ceil(totalItem / 10)
    const [searchText, setSearchText] = useState('')
    useEffect(() => {

        fetch(`http://localhost:5000/api/billing-list?page=${selectedPage}&query=${searchText}`)
            .then(res => res.json())
            .then(data => {
                setBllings((data.blling))
                setTotalItem(data.count)
            });
        setIsReload(!isReload)
    }, [selectedPage, addModal, updateModal, deleteModal, searchText])

    const handleAddBlling = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const phone = e.target.phone.value
        const amount = e.target.amount.value
        setAddModal(false)

        fetch('http://localhost:5000/api/add-billing', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                phone,
                amount
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then(data => {

                if (data.acknowledged) {
                    e.target.reset()
                }
            });
    }

    const handleSelecting = async (e) => {
        const id = e.id

        await fetch(`http://localhost:5000/api/update-billing/${id}`)
            .then(res => res.json())
            .then(data => setSelectedBill(data));
        if (e.isUpdating) {
            setUpdateModal(true)
        }
        if (e.isDeleting) {
            setDeleteModal(true)
        }
    }

    const handleSearch = (event) => {
        const text = event.target.value
        setSearchText(text);

    }


    const handlePageClick = (data) => {
        setSelectedPage(data.selected);
    }

    return (
        <div className='mx-16'>

            {
                addModal && <AddBilling
                    handleAddBlling={handleAddBlling}
                    setAddModal={setAddModal}
                />
            }
            {
                updateModal && <UpdateBilling
                    setUpdateModal={setUpdateModal}
                    selectedBill={selectedBill}
                />
            }
            {
                deleteModal && <DeleteModal
                    setDeleteModal={setDeleteModal}
                    selectedBill={selectedBill}
                />
            }

            <div className='flex justify-between items-center bg-gray-600 px-5 mt-8 rounded'>
                <div className="flex justify-between items-center">
                    <div className="mr-5">
                        <p className="text-xl font-semibold text-white">Bllings</p>
                    </div>
                    <div className="">
                        <input onChange={handleSearch} type="text" placeholder="Search" className="p-1 input-bordered rounded" />
                    </div>
                </div>
                <div className="">
                    <button onClick={() => setAddModal(true)} className="btn bg-gray-400 my-1">Add new billing</button>
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
                                    billing={b}
                                    handleSelecting={handleSelecting}
                                />)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <ReactPaginate
                    previousLabel="<<"
                    nextLabel=">>"
                    breakLabel="..."
                    pageCount={pageCount}
                    marginPagesDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName="flex justify-center mt-4 gap-2 mb-12"
                    pageClassName="px-2 rounded border font-semibold"
                    activeClassName='bg-gray-400'
                />
            </div>
        </div>
    );
};

export default BillingPage;