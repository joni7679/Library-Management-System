import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="container mx-auto bg-gray-800 ">
                <nav className='navbar flex items-center justify-between flex-wrap p-6 '>
                    <div className="logo text-white">Lms</div>
                    <div className="center-nav flex items-center justify-between w-[50%]">
                        <Link to={`/`} className=' mr-[20px] text-white ' >Home</Link>
                        <Link to={`/books`} className=' mr-[20px] text-white ' >Books</Link>
                        <Link to={`/about`} className=' mr-[20px] text-white ' >About As</Link>
                        <Link to={`/contact`} className=' mr-[20px] text-white ' >Contact</Link>
                    </div>
                    <div className="nav-rigt">
                        <Link to={`/login`} className=' mr-[20px] px-[20px] py-[10px] bg-orange-500 text-white rounded-3xl' >Login</Link>
                        <Link to={`/signup`} className=' mr-[20px] px-[20px] py-[10px] bg-orange-500 text-white rounded-3xl' >Register</Link>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar