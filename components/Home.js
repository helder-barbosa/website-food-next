import React from 'react'

const Home = () => {
  return (
    <div className=" h-screen bg-yellow-100">
      <div className=" block flex-wrap justify-around p-10 sm:grid grid-cols-2 ">
        <div className=" p-10 ">
          <h1 className=' text-3xl font-semibold'>Restaurant Paris</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed erat ut sapien ullamcorper vulputate. Fusce sagittis eget ligula a fermentum. Sed tempus vulputate dui, placerat vulputate orci feugiat non.
          </p>
        </div>
        <div>
          <div className=" p-16 border-black border" >
            Image
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home