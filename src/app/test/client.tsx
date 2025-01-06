'use client';

import React, { useEffect, useState } from 'react'
import { getProducts } from './service';

function Client() {
  const [data, setData] = useState([]);
  const get = async () => {
    const _data = await getProducts();
    setData(_data)
  }
  useEffect(() => {
    get()
  }, [])

  return (
    <div>
      {data.map(item => {
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

export default Client