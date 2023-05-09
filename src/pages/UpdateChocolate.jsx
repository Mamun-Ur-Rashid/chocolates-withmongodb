import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateChocolate = () => {
    const loadedData = useLoaderData();
    // console.log(loadedData);

    const handleUpdateChocolate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const country = form.country.value;
        const category = form.category.value;
        const updatedChocolate = { name, photo, country, category };
        console.log("update page",updatedChocolate);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/chocolates/${loadedData._id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedChocolate)

                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    Swal.fire(
                        'Updated!',
                        'Your Chocolate successfully Updated!!.',
                        'success'
                        )
                        // const remaining = chocolates.filter(choco => choco._id !== _id);
                        // setChocolates(remaining);

                })
            }
        })
    }
    return (
        <div className='w-[97%] mx-auto'>
            <h1 className='w-[40%] mx-auto p-3 text-3xl rounded-2xl my-12 text-center bg-orange-400'>Chocolate Management System</h1>
            <div className='my-3 w-3/4 mx-auto'>
                <Link to='/'> <small className='inline-flex items-center gap-2 border-2 p-2 px-4 text-xl hover:border-orange-400'><FaArrowLeft></FaArrowLeft> All Chocolates</small></Link>
            </div>
            <div className='w-3/4 mx-auto bg-orange-100 p-10'>
                <div className='text-center'>
                    <h3 className='text-2xl mb-3'>Update a New Chocolate</h3>
                    <p>Use the below form to create a new product.</p>
                </div>
                <form onSubmit={handleUpdateChocolate}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' defaultValue={loadedData?.name} placeholder="chocolate name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' defaultValue={loadedData?.photo} placeholder="photo url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Country/Factory</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='country' defaultValue={loadedData?.country} placeholder="Country/Factory name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' defaultValue={loadedData?.category} placeholder="Category name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='text-center my-5'>
                        <button className="btn bg-orange-600 hover:bg-orange-800 w-full">Update Chocolate</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateChocolate;