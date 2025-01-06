import { getProductByIdService } from '@/modules/products/services'
import ProductForm from '@/modules/products/components/ProductForm'
import React, { FC } from 'react'
interface PageParams {
  params: { id: string }
}

const ProductDetail: FC<PageParams> = async ({ params }) => {
  const { id } = await params;
  const product = await getProductByIdService(id)

  return (
    <div>
      <ProductForm {...product!} />
    </div>
  )
}

export default ProductDetail