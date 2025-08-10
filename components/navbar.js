"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  if (session) {
    return (
      <>
        <div className="main text-white flex justify-between items-center h-20 px-4 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <Link href="/"><h1 className='text-2xl'>Get Me A Coffee</h1></Link>
          <div className="links flex gap-4 items-center justify-center">
            <div className="flex flex-col h-10 gap-2">
            <button id="dropdownDefaultButton" onClick={()=>setIsOpen(!isOpen)} data-dropdown-toggle="dropdown" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.name} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>
            <div id="dropdown" className={`z-10 ${isOpen?"":"hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`} >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <button type="button" onClick={() => signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </>
    )
  }

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
