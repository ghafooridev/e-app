import React from 'react'
import { getProducts } from '../actions';
import ProductItem from './ProductItem';


async function ProductList() {
  const products = await getProducts()

  return (
    <div className='flex w-full my-10 flex-wrap justify-between items-center'>
      {products.map(item => <ProductItem key={item.id}{...item} />)}
    </div>
  )
}

export default ProductList