import React from 'react'

const NavBar = () => {
  return (
    <div className=" bg-gray-800 text-white flex justify-between">
      <div>
        <h2 className=" p-4 mx-6 hover:text-yellow-500 text-2xl"><a href="/">Restaurant</a></h2>
      </div>
      <div>
        <ul className=" flex text-xl ">
          <li className=" p-4 mx-6 hover:text-yellow-500"><a href="/">Home</a></li>
          <li className=" p-4 mx-6"><a>Menu</a></li>
          <li className=" p-4 mx-6"><a>Contact</a></li>
        </ul>
      </div>

    </div>
  )
}

export default NavBar