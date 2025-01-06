import React from 'react'
import { getProducts } from './service';

async function Server() {
  const _data = await getProducts();
  console.log(_data)
  return (
    <div>
      {_data.map(item => {
        return (
          <div key={item.id}>
            <span>{item.name}</span>
            <span className='mx-10'>-</span>
            <span>{item.quantity}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Server