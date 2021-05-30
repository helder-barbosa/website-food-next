import React from 'react'

const Menu = () => {
  return (
    <div className="h-screen bg-gray-600">
      <div className=" block flex-wrap justify-around p-10 sm:grid grid-cols-3 justify-items-center ">
        <div className='bg-yellow-100 p-16 border border-black'>
          1
        </div>
        <div className='bg-yellow-100 p-16 border border-black'>
          2
        </div>
        <div className=' bg-yellow-100 p-16 border border-black'>
          3
        </div>
      </div>
    </div>
  )
}

export default Menu
