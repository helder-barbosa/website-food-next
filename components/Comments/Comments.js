import React from 'react'

const CommentsData = [
  {
    id: 1,
    username: 'joao_carlos',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed erat ut sapien ullamcorper vulputate.',
    image: 'http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png'
  },
  {
    id: 2,
    username: 'maria_eduarda',
    comment: 'Excelente Restaurante !',
    image: 'http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png'
  },
  {
    id: 3,
    username: 'paulo_henrique',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed erat ut sapien ullamcorper vulputate.',
    image: 'http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png'
  },
]


const Comments = () => {
  return (
    <div className=" h-screen bg-yellow-100 p-10 mx-auto">
      <div className='text-2xl text-black text-center'>
        <h1 className=' text-3xl'>Comentários dos Clientes :</h1>
      </div>
      <div>
        <ul className='block flex-wrap justify-around p-10 sm:grid grid-cols-3 justify-items-center '>
          {CommentsData.map(item => (
            <li key={item.id} className=' h-64 w-80 p-5 shadow-xl rounded-lg bg-gray-300 mb-3'>
              <div>
                <div className=' h-32 overflow-hidden'>
                  <img className=' block mx-auto w-1/3' src={item.image} alt={item.username} />
                </div>
                <div className='text-center p-3'>
                  <h3 className=' text-xl font-bold'>{item.username}</h3>
                  <p className='text-lg font-bold text-gray-600 truncate'>{item.comment}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Comments