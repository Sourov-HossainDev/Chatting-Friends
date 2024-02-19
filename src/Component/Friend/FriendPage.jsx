import React from 'react'
import ManPicture from '../../assets/Image/manpicture.jpg'

const FriendPage = () => {
  return (
    <>
        <div className='bg-primaryColor w-full h-screen  '>
          <div className='max-w-container mx-auto bg-sceondColor text-offWhite px-[30px] py-[50px]  '>
            <div className='flex justify-center font-lobster text-4xl mb-[10px]  '>
              
              <p>User Name</p>
              <p> - All Friend</p>
              
            </div>
            <div className='border-y-4 py-[3px] mb-[50px] '></div>
            <div>
              <div className='w-[240px] h-[250px] bg-primaryColor rounded-[8.6px] py-[20px] px-[10px] '>
                <img src={ManPicture} alt="" />
                <p className='font-Raleway font-semibold text-base mt-[10px]   '>Md Hasibur Rhaman</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default FriendPage