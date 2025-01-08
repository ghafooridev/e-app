"use cache"

import React from 'react'
import { getProducts } from './service';

async function Server() {
  const _data = await getProducts();
  console.log('server page')
  return (
    <div>
      {_data.map((item: any) => {
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