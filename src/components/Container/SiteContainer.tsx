import React, { FC, ReactNode } from 'react'
import Header from '../Header'
import Footer from '../Footer'

const SiteContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className='px-20 mt-20' style={{ minHeight: 'calc(100vh - 120px)' }}>
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default SiteContainer