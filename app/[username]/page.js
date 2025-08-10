"use client";
import React from 'react';
import { useSession } from 'next-auth/react';

export default function Username({ params }) {
  const { data: session } = useSession();

  return (
    <>
    <div className="relative w-full h-{350}">
      <img
        src="/assets/matrix-code.jpg"
        alt="Cover"
        className="w-full h-80 object-cover"
      />
     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <img
          src="/assets/default-avatar.jpg"
          alt="Avatar"
          className="w-40 h-40 rounded-full border-4 border-white"
        />
      </div>
    </div>
    <div className="text-center mt-25">
      <h1 className="text-3xl font-bold text-white">
        {params.username.split('%20').join(' ')}
      </h1>
    </div>
    <div className="flex h-100 justify-between items-center mt-10 gap-2 m-4">
      <div className='w-1/2 h-full bg-[#070117] rounded-lg p-4'>
        <h2 className='text-2xl text-white mb-4 '>Recent Donations</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }} className=' flex flex-col items-start text-white text-l' >
        <li className='flex justify-center items-center gap-2'>
          <img src="/assets/default-avatar.jpg" alt="user" className='w-6 h-6 rounded-full'/>
          ninja donated $10
        </li>
        <li className='flex justify-center items-center gap-2'>
          <img src="/assets/default-avatar.jpg" alt="user" className='w-6 h-6 rounded-full'/>
          ninja donated $10 
        </li>
        <li className='flex justify-center items-center gap-2'>
          <img src="/assets/default-avatar.jpg" alt="user" className='w-6 h-6 rounded-full'/>
          ninja donated $10
        </li>
        </ul>
      </div>
      <div className='w-1/2 h-full bg-[#070117] rounded-lg p-4'></div>
      
    </div>
</>
  );
}
