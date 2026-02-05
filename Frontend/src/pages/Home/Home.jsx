import React from 'react'
import Carousel from '../../components/Hero/Carousel'
import AllProducts from '../../components/Hero/AllProducts'

const Home = () => {
  return (
    <div className='mt-10 flex flex-col gap-10'>
      <Carousel/>
      <AllProducts/>
    </div>
  )
}

export default Home
