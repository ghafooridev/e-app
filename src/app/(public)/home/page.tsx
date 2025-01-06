import React from 'react'
import Hero from '@/modules/home/components/Hero'
import NewProducts from '@/modules/home/components/NewProducts'
import CategoryProducts from '@/modules/home/components/CategoryProducts'

const Home = async () => {
  return (
    <div className='w-full'>
      <Hero />
      <NewProducts />
      <CategoryProducts />
    </div>
  )
}

export default Home