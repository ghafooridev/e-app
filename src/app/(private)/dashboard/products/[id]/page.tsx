import React, { FC } from 'react'
interface PageParams {
  params: { id: string }
}

const ProductDetail: FC<PageParams> = ({ params: { id } }) => {
  return (
    <div>ProductDetail- {id}</div>
  )
}

export default ProductDetail