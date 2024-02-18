import React, { useState } from 'react'
import MassageIcon from '../assets/Image/chat.png'
import { useNavigate } from 'react-router-dom'



const FontPage = () => {
  const naviget = useNavigate();
  const [fontpage, setFontpage] = useState()

  setTimeout(() => {
    naviget('/Registration')
  }, 5000)


  return (
    <>

      <div>
        <div className='flex'>
          <div className='w-3/6'>
            <div className='flex justify-center items-center  '>
              <img src={MassageIcon} alt="" className='w-[300px] h-[300px] mt-[70px] ' />
              <p className='absolute bottom-[190px] left-[100px] font-Raleway font-bold text-6xl text-[#4cd137]  '>Welcome To Mingle-Chat</p>

            </div>
          </div>
          <div className='w-3/6'>
            <div className='bg-fontImage bg-no-repeat bg-cover w-full h-screen'>

            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default FontPage