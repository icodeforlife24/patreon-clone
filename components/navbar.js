import React from 'react'
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
    <div className="main bg-black text-white flex justify-between items-center p-4">
        <h1>Get Me A Coffee</h1>
        <div className="links flex gap-4">
           <Link href="/" className="text-white hover:text-gray-300">Home</Link>
           <Link href="/about" className="text-white hover:text-gray-300">About</Link>
           <Link href="/contact" className="text-white hover:text-gray-300">Contact Us</Link>
    </div>
    </div>
    </>
  )
}
