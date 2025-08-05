import React from 'react'
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
    <div className="main  text-white flex justify-between items-center h-20 px-4 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Link href="/"><h1 className='text-2xl'>Get Me A Coffee</h1></Link>
        <div className="links flex gap-4">
          <Link href='/login'> <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button></Link>
    </div>
    </div>
    </>
  )
}
