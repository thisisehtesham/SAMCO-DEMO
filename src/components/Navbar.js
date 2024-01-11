import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {toggleMenu} from "../utils/appSlice"

const Navbar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const handleToggle = () => {
    dispatch(toggleMenu());

  };

  return (
    <nav className="bg-[#FF3434] text-white px-6 flex items-center justify-between h-[81px]">
      <div> 
        <img
          onClick={()=> handleToggle()}
          className='cursor-pointer'
          width= "59"
          height= "59"
          src={!isMenuOpen ? './images/Cancel.png' : './images/Menu.png'}
          alt='Menu'/>
      </div>
      <div className='flex justify-center items-center gap-5'>
        <h2>Test User</h2>
        <img src='./images/UserIcon.png' alt='UserIcon'/>
      </div>
    </nav>
  );
};

export default Navbar;
