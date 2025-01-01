import React from 'react'
import Hero from '../components/Hero'
import NewProducts from '../components/NewProducts'
import CategoryProducts from '../components/CategoryProducts'

function HomeView() {
  return (
    <div className='w-full'>
      <Hero />
      <NewProducts />
      <CategoryProducts />
    </div>
  )
}

export default HomeView