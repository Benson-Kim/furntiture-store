import React from 'react'
import { BsSearch, BsBag, BsHeart, BsPerson } from 'react-icons/bs'
import { SiTailwindcss } from 'react-icons/si'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='flex justify-between my-3 px-16 w-full'>
            <Link to='/' className="w-1/5 flex items-center gap-x-2 text-lg font-semibold font-sans">
                <SiTailwindcss className='text-4xl text-green-500' />
                Tangarine Furnitures
            </Link>
            <article className="border-2 border-green-400 rounded-xl flex items-center gap-x-3">
                <input type="search" name="" id=""
                    placeholder='Search here' className='ml-2 pl-2 py-1.5 grow border-r border-zinc-200 placeholder:text-zinc-300 focus:outline-none' />
                <span className='block '>
                    <label htmlFor="categories" />
                    <select name="categories" id="categories" className='bg-white mr-1 capitalize text-zinc-600 text-sm '>
                        <option value="" defaultValue="categories" disabled>Categories</option>
                        <option value="tables">Tables</option>
                        <option value="chairs">Chairs</option>
                        <option value="beds">Beds</option>
                        <option value="wallunits">Wallunits</option>
                        <option value="dressers">Dressers</option>
                        <option value="ward drobes">Ward drobes</option>
                    </select>
                </span>
                <button className='bg-green-400 w-10 -ml-2 rounded-r-md h-full flex items-center justify-center'>
                    <BsSearch className='text-lg text-white ' />
                </button>

            </article>
            <div className='flex gap-x-3 md:gap-x-5 items-center '>
                <button className='hover:text-orange-600'><BsBag className='text-xl' /></button>
                <button className='hover:text-orange-600'><BsHeart className='text-xl' /></button>
                <button className='hover:text-orange-600'><BsPerson className='text-xl' /></button>

            </div>
        </div>
    )
}

export default Navbar