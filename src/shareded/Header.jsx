import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='p-5 bg-orange-500 md:flex items-center justify-start rounded-2xl md:m-6 mx-auto text-white'>
                <div className='flex items-center gap-2'>
                    <small className=''>
                        <img className='h-10 inline' src="https://www.shutterstock.com/image-vector/chocolate-handwritten-text-isolated-on-260nw-1987051664.jpg" alt="" />

                    </small>
                   <small className='text-5xl'>Chocolates</small>
                </div>
                <div>
                    <ul className='md:flex md:ml-72'>
                        <li className='mr-5 md:my-0 my-4 '>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className='mr-5 '>
                            <NavLink to='/'>About Us</NavLink>
                        </li>
                        <li className='mr-5 md:my-0 my-4 '>
                            <NavLink to='/'>Blog</NavLink>
                        </li>
                        <li className='mr-5 md:mb-0 mb-6 '>
                            <NavLink to='/'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;