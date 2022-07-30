import React from 'react'
import Navbar from './Navbar'
import TopNav from './TopNav'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <TopNav />
            <Navbar />
            <div className="bg-zinc-100 w-full py-3 ">
                <div className="flex items-center text-center uppercase text-zinc-800 gap-x-24 ml-72">
                    <Link to="/">home</Link>
                    <Link to="/shop">shop</Link>
                    <Link to="/blog">blog </Link>
                    <Link to="/about">about</Link>
                    <Link to="/contact">contact us</Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation