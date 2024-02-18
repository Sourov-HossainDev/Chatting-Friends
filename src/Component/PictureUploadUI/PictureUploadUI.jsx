import React from 'react'
import corssBTN from '../../assets/Image/x-button.png'
import { useNavigate } from 'react-router-dom'
import profilePicture from '../../assets/Image/profilePicture.png'

const PictureUploadUI = () => {
    const naviget = useNavigate();

    const pictureUpload_Naviget_ProfilePage = () => {
        naviget('/profilePage')
    }
    return (
        <>
            <div className='bg-sceondColor w-full h-screen flex justify-center items-center '>
                <div className='w-[800px] h-[550px] bg-primaryColor rounded-[12px] py-[20px] px-[50px] font-Raleway '>
                    <div className='relative'>
                        <p className='text-offWhite text-center text-4xl font-bold  '>Upload your picture</p>
                        <div className='border-b-4 border-t-4  py-[4px] mt-[20px] '></div>
                        <div className=' absolute top-0 right-0  cursor-pointer hover:border hover:border-4 rounded-full  '>
                            <img onClick={pictureUpload_Naviget_ProfilePage} src={corssBTN} alt="" className='w-[40px] h-[40px]' />
                        </div>
                        
                    </div>
                    <div className='flex justify-center mt-[20px] '>
                        <img src={profilePicture} alt="" className='w-[100px] h-[100px] rounded-full ' />
                    </div>
                    <div className='w-full h-[250px] '></div>
                    <div className='flex justify-center'>
                        <p className='font-Raleway font-semibold text-offWhite px-[50px] bg-btnColor inline-block py-[8px] text-xl rounded-[8.6px] cursor-pointer '>Upload Picture</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PictureUploadUI