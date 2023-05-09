import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddChocolates = () => {

    const handleChocolateAdded =(event) => {
        event.preventDefault();
        const form = event.target;
        const name =form.name.value;
        const photo = form.photo.value;
        const country = form.country.value;
        const category = form.category.value;
        const addedChocolate = {name, photo, country, category};
        console.log(addedChocolate);
        fetch('http://localhost:5000/chocolates', {
            method: 'POSt',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addedChocolate)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully added a Chocolate!!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            console.log(data);
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
                    <h3 className='text-2xl mb-3'>New Chocolates</h3>
                    <p>Use the below form to create a new product.</p>
                </div>
                <form onSubmit={handleChocolateAdded}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="chocolate name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Country/Factory</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='country' placeholder="Country/Factory name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' placeholder="Category name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='text-center my-5'>
                    <button className="btn bg-orange-600 hover:bg-orange-800 w-full">Add Chocolate</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddChocolates;