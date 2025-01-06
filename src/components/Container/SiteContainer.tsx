import React, { FC, ReactNode } from 'react'
import Footer from '../Footer'
import { Badge } from '@/components/ui';

import { MonitorSmartphone, ShoppingCart } from 'lucide-react';
import UserProfile from '../UserProfile';

const Header = () => {
  return (
    <header
      className='fixed w-full flex bg-white shadow-md justify-between px-20 h-20 z-40'
    >
      <div className="flex items-center gap-3">
        <MonitorSmartphone />
        <span className="text-2xl font-bold text-gray-800">Digital Shop</span>
      </div>

      <div className="flex items-center gap-6">
        <UserProfile />
        <div className="relative">
          <Badge className="absolute bottom-3 left-3  rounded-full w-5 h-5 flex items-center justify-center">4</Badge>
          <ShoppingCart size={20} className="relative" />
        </div>
      </div>
    </header>
  );
};

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