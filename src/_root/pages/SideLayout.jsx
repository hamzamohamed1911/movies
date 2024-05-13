import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'

const SideLayout = () => {
  return (
    <>
    <SideBar/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default SideLayout