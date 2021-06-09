import React from 'react'

const MenuData = [
  {
    id: 1,
    title: 'Lasanha',
    price: 20,
    image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4581957.jpg&w=596&h=399&c=sc&poi=face&q=85'
  },
  {
    id: 2,
    title: 'Pizza',
    price: 35,
    image: 'https://img.cybercook.com.br/receitas/527/massa-de-pizza-7-840x480.jpeg?q=75'
  },
  {
    id: 3,
    title: 'Espaguete',
    price: 30,
    image: 'https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-espaguete-com-almondega.jpg?quality=85&strip=info&resize=680,453'
  }
]

const Menu = () => {
  return (
    <div className=" h-auto bg-gray-600 p-10">
      <div className='text-2xl text-white text-center'>
        <h1 className=' text-3xl'>Menu</h1>
        <h2>Algumas opções do cardápio :</h2>
      </div>

      <div>
        <ul className='block flex-wrap justify-around p-10 sm:grid grid-cols-3 justify-items-center '>
          {MenuData.map(item => (
            <li className=' h-52 w-52 p-2 shadow-xl rounded-lg bg-red-100 mb-2'>
              <div>
                <div className=' h-24 overflow-hidden'>
                  <img className=' object-cover' src={item.image} alt={item.title} />
                </div>
                <div className='text-center p-3'>
                  <h3 className=' text-xl font-bold'>{item.title}</h3>
                  <p className='text-lg font-bold text-gray-600'>R$ {item.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default Menu
