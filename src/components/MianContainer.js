import React from 'react'

const MianContainer = () => {
  return (
    <div className='flex mt-[72px]'>
      <div>
        <img
          className='ml-[55px]'
          width= "672"
          height= "686"
          alt='Watchlist' 
          src='./images/Watchlist.png'/>
      </div>
      <div className='ml-[13px]'>
        <img
          width= "714"
          height= "483"
          alt='TradeStory'
          src='./images/TradeStory.png'/>
        <img
          className='mt-[37px]'
          width= "714"
          height= "486"
          alt='EventCalender' 
          src='./images/EventCalender.png'/>
      </div>
    </div>
  )
}

export default MianContainer