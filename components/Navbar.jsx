import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
            <Link className='text-white font-bold text-xl' href={'/'}>LOGO</Link>
            <Link className='bg-white py-2 px-4 rounded' href={'/addTopic'}>Add Topic</Link>
        </nav>
    );
};

export default Navbar;