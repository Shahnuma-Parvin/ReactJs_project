import React from 'react'

const RightCardContent = (props) => {
  return (

     <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white h-14 w-12 text-xl rounded-full justify-center items-center font-semibold flex'>{props.id+1}</h2>
    <div> 

      <p className='text-shadow-2xs text-xl leading-relaxed mb-14 text-white' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus officia tempora quod esse, neque numquam.</p>

      <div className='flex justify-between'>
        <button className='bg-blue-600 text-white px-8 py-2 font-medium rounded-full'>{props.tag}</button>
        <button className='bg-blue-600 text-white px-3 py-2 font-medium rounded-full'><i className="ri-arrow-right-line"></i></button>
        </div> 
        </div>
        </div>
  )
}

export default RightCardContent
