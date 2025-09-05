import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/admin/Sidebar';

const Layout = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/')
  }

  return (
    <>
      <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
        <img src="/logo.png" alt="quilljot logo" width={20} />
        <span className="font-bold text-foreground">QUILLJOT</span>
      </div>
        
        <Button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>Logout</Button>
      </div>

      <div className='flex h-[calc(100vh-70px)]'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}

export default Layout
