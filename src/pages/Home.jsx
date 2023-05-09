import React, { useState } from 'react';
import { FaRegEdit, FaRegWindowClose } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Home = () => {
    const loadedChocolates = useLoaderData();
    const [chocolates, setChocolates] = useState(loadedChocolates);
    console.log(chocolates);

    const handleDeleteChocolate = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/chocolates/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = chocolates.filter(choco => choco._id !== _id);
                            setChocolates(remaining);
                        
                    })
            }
        })
    }
    return (
        <div className='w-[97%] mx-auto'>
            <h1 className='w-[40%] mx-auto p-3 text-3xl rounded-2xl my-12 text-center bg-orange-400'>Chocolate Management System</h1>
            <div className='my-3'>
                <Link to='/addChocolate'> <button className='border-2 p-2 text-xl hover:border-orange-400'>+ New Chocolate</button></Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className='bg-orange-400'>
                        <tr >
                            <th>Image</th>
                            <th>Name</th>
                            <th>Country/Factory</th>
                            <th>Category</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    {
                        chocolates.map(chocolate => <tbody key={chocolate._id}>
                            <tr>
                                <th><img className='h-20 w-20' src={chocolate.photo} alt="" /></th>
                                <td>{chocolate.name}</td>
                                <td>{chocolate.country}</td>
                                <td>{chocolate.category}</td>
                                <td><div className='text-4xl flex gap-2'>
                                    <Link to={`/updateChocolate/${chocolate._id}`}><small><button><FaRegEdit></FaRegEdit> </button></small></Link>
                                    <small><button onClick={() => handleDeleteChocolate(chocolate._id)}><FaRegWindowClose></FaRegWindowClose> </button></small>
                                </div>
                                </td>
                            </tr>
                        </tbody>)
                    }


                </table>
            </div>
        </div>
    );
};

export default Home;