import React from 'react'
import { useSelector } from "react-redux"

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(isMenuOpen) return null;

  return (
    <div className='bg-[#FEEDED] rounded-r-[39px] w-[429px] h-full absolute flex flex-col items-center'>
      <div className='w-[336px] h-[53px] text-3xl mt-[18px]'>
        <h3>Current User : Test User</h3>
      </div>

      <div className='flex flex-col mt-[84px] gap-[56px]'>
        <div className='flex bg-[#BAE8FB] hover:bg-[#87CFEC] rounded-[15px] w-[349px] h-[83px] items-center cursor-pointer'>
          <img className='ml-[18px]' src='./images/Profileuser.png' alt='ProfileUser'/>
          <h3 className='ml-[37px] text-2xl'>Account Settings</h3>
        </div>
        <div className='flex bg-[#BAE8FB] hover:bg-[#87CFEC] rounded-[15px] w-[349px] h-[83px] items-center cursor-pointer'>
          <img className='ml-[18px]' src='./images/Help.png' alt='Help'/>
          <h3 className='ml-[34px] text-2xl'>Help</h3>
        </div>
        <div className='flex bg-[#BAE8FB] hover:bg-[#87CFEC] rounded-[15px] w-[349px] h-[83px] mt-[23px] items-center cursor-pointer'>
          <img className='ml-[16px]' src='./images/VideoPlayer.png' alt='VideoPlayer'/>
          <h3 className='ml-[38px] text-2xl'>Tutorial</h3>
        </div>
      </div>
    
      <div className='flex bg-[#BAE8FB] hover:bg-[#87CFEC] rounded-[15px] w-[349px] h-[83px] mt-[310px] items-center cursor-pointer'>
        <img className='ml-[22px]' src='./images/Exit.png' alt='Exit'/>
        <h3 className='ml-[22px] text-2xl'>Log Out</h3>
      </div>
    </div>
  )
}

export default Sidebar