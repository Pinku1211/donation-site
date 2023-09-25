import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div className='background-img px-2 mb-8 py-16 lg:py-36'>
            <div className='background'>
                <h1 className='text-xl md:text-2xl lg:text-5xl font-bold text-center'>I Grow By Helping People In Need</h1>
                <div className='flex justify-center items-center'>
                    <div className='flex mt-5 lg:mt-10'>
                        <input type="text" placeholder="Search here..." className="py-1 px-3 lg:py-3 rounded-l-md lg:w-[470px]" />
                        <button className='bg-[#FF444A] px-4 lg:px-6 rounded-r-md text-white'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;