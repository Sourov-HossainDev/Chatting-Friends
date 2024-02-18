import React, { useState } from 'react'
import coverPhoto from '../../assets/Image/manpicture.jpg'
import profilePicture from '../../assets/Image/profilePicture.png'
import HomeIcon from '../../assets/Image/house.png'
import { useNavigate } from 'react-router-dom'
import CreateIcon from '../../assets/Image/CreateIcon.png'



const Profile = () => {
    const naviget = useNavigate();

    const navigetHome = () => {
        naviget('/Home')
    }

    // ========= Cover Photo Upload Button Start ===========
    // =====================================================
    const [coverPhotoUpload, setCoverPhotoUpload] =useState(false);

    const coverPhotoUploadBTN =() =>{
      naviget('/PictureUploadUI')
    }
    return (
        <>
            <div className='bg-primaryColor w-full h-full '>
                <div className='max-w-container mx-auto pt-[10px] '>
                    <div className='mb-[10px] flex justify-end'>
                        <img onClick={navigetHome} src={HomeIcon} alt="" className='w-[40px] h-[40px] cursor-pointer  ' />
                    </div>
                    <div className=' '>
                        <div className='relative'>
                            <img src={coverPhoto} alt="" className='w-full h-[400px] object-cover no-repeat rounded-[8.6px] ' />
                            <img onClick={coverPhotoUploadBTN} src={CreateIcon} alt="" className='w-[45px] h-[45px] absolute bottom-[40px] right-[40px] cursor-pointer    ' />
                          
                                
                           

                        </div>
                        <div className='mt-[20px] mb-[20px] flex items-center '>
                            <img src={profilePicture} alt="" className='w-[200px] h-[200px] rounded-full  ' />
                            <p className='ml-[50px] font-Raleway font-bold text-white text-5xl '>Md. Sourov Hossain</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-2/6'>
                            <div className='bg-red-500 w-full h-[400px] '></div>
                        </div>
                        <div className='w-4/6'>
                            <div className='bg-green-500 w-full h-[400px] ml-[20px] '></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile