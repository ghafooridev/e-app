import React from 'react'
import { getProductsService } from '../services';
import ProductItem from './ProductItem';



async function ProductList() {
  const products = await getProductsService()

  return (
    <div className='flex w-full my-10 flex-wrap justify-between items-center'>
      {products.map(item => <ProductItem key={item.id}{...item} />)}
    </div>
  )
}

export default ProductList