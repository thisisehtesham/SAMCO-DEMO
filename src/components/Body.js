import React from 'react';
import Sidebar from './Sidebar';
import MianContainer from './MianContainer';

const Body = () => {
  return (
      <div className="flex bg-[#CAE6FF] relative">
        <Sidebar/>
        <MianContainer/> 
      </div>
  );
};

export default Body;
