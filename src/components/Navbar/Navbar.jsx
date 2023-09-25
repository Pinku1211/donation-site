import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='flex justify-between items-center gap-4 my-6 mx-2 lg:max-w-[1300px] lg:mx-auto'>
            <div>
                <img src="https://i.ibb.co/FhmV1TM/Logo.png" alt="" />
            </div>
            <div>
                <nav className='flex gap-2 lg:gap-6'>
                    <div>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) => 
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;