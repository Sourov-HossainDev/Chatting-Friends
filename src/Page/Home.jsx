import React from 'react'
import SideBar from './SideBar'
import postPicture from '../assets/Image/manpicture.jpg'
import { AiFillLike } from "react-icons/ai";

import likePost from '../assets/Image/postIcon/like.png'
import lovePost from '../assets/Image/postIcon/love.png'
import hahaPost from '../assets/Image/postIcon/haha.png'
import sadPost from '../assets/Image/postIcon/sad.png'
import angryPost from '../assets/Image/postIcon/angry.png'

import profilePicture from '../assets/Image/profilePicture.png'

const Home = () => {
  return (
    <>
      <div className='flex'>
        <div className='w-3/12 '>
          <div>
            <SideBar></SideBar>
          </div>
        </div>
        <div className='w-9/12 '>
          <div className='bg-sceondColor w-full h-screen pt-[30px] px-[50px]  overflow-y-scroll   '>
            <div className='w-full h-[600px] bg-primaryColor px-[20px]  py-[30px] rounded-[8.6px]  '>
              <div className='flex w-full h-full'>
                <div className='w-4/6 '>
                  <div className='w-full h-full'>
                    <img src={postPicture} alt="" className='w-full h-full object-cover  ' />
                  </div>
                </div>

                <div className='w-2/6  '>
                  <div className='pl-[10px] pt-[20px] '>
                    <div className=' '>

                      <img src={likePost} alt="" className='w-[40px] h-[40px] ' />
                    </div>
                    <div className='mt-[35px]  '>
                      <p className='text-center text-offWhite font-Raleway font-semibold text-xl border-b pb-[5px] '>Comment Box </p>
                      <div className='border mt-[10px] w-full h-[400px]  rounded-[12px] overflow-y-scroll p-[20px] '>
                        <div>
                          <div className='flex items-center'>
                            <img src={profilePicture} alt="" className='w-[40px] h-[40px] rounded-full ' />
                            <div className='text-offWhite font-Raleway ml-[10px]  '>
                              <p className='font-semibold text-base'>Md. Sourov Hossain</p>
                              <p>keisa laga mera majak</p>
                            </div>
                          </div>
                          <div className='flex items-center mt-[10px] '>
                            <img src={profilePicture} alt="" className='w-[40px] h-[40px] rounded-full ' />
                            <div className='text-offWhite font-Raleway ml-[10px]  '>
                              <p className='font-semibold text-base'>Md. Sourov Hossain</p>
                              <p>keisa laga mera majak</p>
                            </div>
                          </div>
                          <div className='flex items-center mt-[10px] '>
                            <img src={profilePicture} alt="" className='w-[40px] h-[40px] rounded-full ' />
                            <div className='text-offWhite font-Raleway ml-[10px]  '>
                              <p className='font-semibold text-base'>Md. Sourov Hossain</p>
                              <p>keisa laga mera majak</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>





            <div className=' mt-[30px] w-full h-[600px] bg-primaryColor px-[30px] py-[30px] rounded-[8.6px]  '>
              <div className='flex w-full h-full'>
                <div className='w-4/6 '>
                  <div className='w-full h-full'>
                    <img src={postPicture} alt="" className='w-full h-full object-cover  ' />
                  </div>
                </div>

                <div className='w-2/6  '>
                  <div className='px-[20px] pt-[20px] '>
                    <div className=' '>
                      <img src={likePost} alt="" className='w-[40px] h-[40px] ' />
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home