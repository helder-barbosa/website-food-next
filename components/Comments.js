import React from 'react'

const Comments = () => {
  return (
    <div className=" h-screen bg-yellow-100 p-10">
      <div className='text-2xl text-black text-center'>
        <h1 className=' text-3xl'>Comentários dos Clientes :</h1>
      </div>
      <div className=" block flex-wrap justify-around p-10 sm:grid grid-cols-3 justify-items-center">
        <div className='bg-yellow-100 p-10 border border-black'>
          1
        </div>
        <div className='bg-yellow-100 p-10 border border-black'>
          2
        </div>
        <div className=' bg-yellow-100 p-10 border border-black'>
          3
        </div>
      </div>
    </div>
  )
}

export default Comments