import React from 'react'

const page = () => {
  return (
  <>
    <div className=" w-full h-full flex flex-col mt-10 items-center justify-center p-10 gap-1.5  text-white">
{/* input field for name */}
<h3 className='text-bold text-xl'>Enter Your Name</h3>
<input
  type="text"   
    placeholder="Enter Name"
    className="p-2 rounded-lg bg-[#38373a] text-white w-1/3 mb-4"/>
<h3 className='text-bold text-xl'>Enter Email</h3>
<input
  type="email"   
    placeholder="Enter Email"
    className="p-2 rounded-lg bg-[#38373a] text-white w-1/3 mb-4"/>
<h3 className='text-bold text-xl'>Enter Profile Image Link</h3>
<input
  type="text"   
    placeholder="Enter Image Link"
    className="p-2 rounded-lg bg-[#38373a] text-white w-1/3 mb-4"/>
<h3 className='text-bold text-xl'>Enter Cover Image Link </h3>
<input
    type="text"   
        placeholder="Enter Cover Image Link"
        className="p-2 rounded-lg bg-[#38373a] text-white w-1/3 mb-4"/>
<h3 className='text-bold text-xl'>RazorPay ID</h3>
<input
    type="text"   
        placeholder="Enter RazorPay ID"
        className="p-2 rounded-lg bg-[#38373a] text-white w-1/3 mb-4"/>
<h3 className='text-bold text-xl'>RazorPay Secret</h3>
<input
    type="text"   
        placeholder="Enter RazorPay Secret"
        className="p-2 rounded-lg bg-[#38373a] text-white w-1/3 mb-4"/>
<button className='bg-[#3505627b] py-2 w-1/3 px-10 rounded-lg hover:bg-[#350562] transition-colors'>Save</button>
</div>
</>
  )
}

export default page
