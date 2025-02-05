import React, { FC, ReactNode } from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui"
import SideBar from "@/modules/dashboard/components/SideBar"
import BreadCrumb from '@/modules/dashboard/components/BreadCrumb';
import UserProfile from '@/components/UserProfile';
import Footer from '../Footer';


const Header = () => {
  return (
    <div className='w-full h-20 shadow-md flex items-center justify-between px-4'>
      <div className='flex items-center gap-2'>
        <SidebarTrigger />
        <BreadCrumb />
      </div>
      <UserProfile />
    </div>
  )
}

const SiteContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <SidebarProvider>
        <SideBar />
        <main className="flex flex-col justify-between min-h-screen w-full">
          <Header />
          <div className='px-20 mt-10' style={{ minHeight: 'calc(100vh - 160px)' }}>
            {children}
          </div>
          <Footer />
        </main>
      </SidebarProvider>
    </div>



  )
}

export default SiteContainer