import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='w-100 flex justify-between bg-gray-800 font-bold'>
                <ul className='flex gap-4 my-4 mx-6'>
                    <li>CV Maker</li>
                    <li>Donwload</li>
                </ul>

                <ul className='flex gap-4 my-4 mx-6'>
                    <li><button className='text-blue-600'>b</button></li>
                    <li><button className='text-green-400'>g</button></li>
                    <li><button className='text-yellow-400'>y</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
