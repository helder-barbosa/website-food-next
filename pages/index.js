import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Menu from '../components/Menu/Menu'
import Comments from '../components/Comments'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Menu />
      <Comments />
      <Footer />
    </div>
  )
}

export default Index