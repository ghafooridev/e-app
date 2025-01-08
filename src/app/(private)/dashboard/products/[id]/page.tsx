import { getProductByIdService } from '@/modules/products/services'
import ProductForm from '@/modules/products/components/ProductForm'
import React, { FC } from 'react'


const ProductDetail: FC<any> = async ({ params }) => {
  const parameters = await params;
  const product = await getProductByIdService(parameters.id)

  return (
    <div>
      <ProductForm {...product!} />
    </div>
  )
}

export default ProductDetail