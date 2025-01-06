import React, { Suspense } from 'react'
import Server from './server'

function page() {
  return (
    <div>
      {/* <Suspense fallback="...">
        <Server />
      </Suspense> */}
      <Server />
    </div>
  )
}

export default page