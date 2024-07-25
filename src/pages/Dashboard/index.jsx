import React, { useState } from 'react'
import SideBar from '../../components/SideBar';
import Zaika from '../../components/Zaika';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [ActivePage, setActivePage] = useState('stats')
  return (
    <>

      <div className="flex mdlarge:flex-row flex-col items-stretch overflow-hidden gap-5 pb-[1rem] xl:px-32 sm:px-10 px-5 ">
        <SideBar setActivePage={setActivePage} ActivePage={ActivePage} />
        <div className={`min-h-[70vh] border rounded-xl shadow-[1px_1px_5px_1px_rgba(0,0,0,.1)] border-[#DEDEDE] flex-1 overflow-y-auto px-0 h-[100%] right_container_scroll`}>
          <Outlet />
        </div>
      </div>
      <Zaika />
    </>
  )
}

export default Dashboard