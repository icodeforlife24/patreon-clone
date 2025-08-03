import React from 'react'
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
    <div className="main  text-white flex justify-between items-center h-20 px-4 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <h1 className='text-2xl'>Get Me A Coffee</h1>
        <div className="links flex gap-4">
           <Link href="/" className="text-white hover:text-gray-300 text-l">Home</Link>
           <Link href="/about" className="text-white hover:text-gray-300 text-l">About</Link>
           <Link href="/contact" className="text-white hover:text-gray-300 text-l">Contact Us</Link>
    </div>
    </div>
    </>
  )
}
