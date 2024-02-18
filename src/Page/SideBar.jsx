import React, { useState } from 'react'
import { RiUploadCloud2Fill } from "react-icons/ri";
import chatIcon from '../assets/Image/chat.png'
import heartIcon from '../assets/Image/heart.png'
import friendsIcon from '../assets/Image/friends.png'
import houseIcon from '../assets/Image/house.png'
import searchIcon from '../assets/Image/search.png'
import menuIcon from '../assets/Image/menu.png'
import createIcon from '../assets/Image/create.png'
import { useNavigate } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import profilePicture from '../assets/Image/profilePicture.png'
import friendRequest from '../assets/Image/FreindRequest.png'


import LogoutIcon from '../assets/Image/logOut_Icon.png'


import corssBTN from '../assets/Image/x-button.png'
import { MdOutlineAddAPhoto } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";



const SideBar = () => {
    const naviget = useNavigate();


   

    // ========== Profile Picture UI ===========

    const [profilePictureUploadUI, setProfilePictureUploadUI] = useState(false)


    const pictureUpload_Naviget_ProfilePage = () => {
        setProfilePictureUploadUI(false)

    }
    // ============== Hover image upload button Icon ========

    const UploadImage = () => {
        setProfilePictureUploadUI(true)
        setmassage(false);
        setMenu(false);
    }

    // ========== Home Area Start ===========
    // ======================================

    const homeIcon = () => {

        setSerchOption(false) 
        setmassage(false);
        setMenu(false);
        setProfilePictureUploadUI(false)


    }

    // ============ Serch area start ============
    // ==========================================

    const [serchOption, setSerchOption] = useState(false)

    const serchSidebarBTN = () => {
        setSerchOption(true);
        setmassage(false);
        setMenu(false);
        setProfilePictureUploadUI(false);

    }
    const crossSidebarIcon = () => {
        setSerchOption(false)
    }



    //============ Massage start ===============
    // =========================================
    const [massage, setmassage] = useState(false);
    const [massageDashboard, setMassageDashboard] = useState(false);

    const massageItem = () => {
        setmassage(true);
        setMenu(false);
        setProfilePictureUploadUI(false)
        setSerchOption(false)

    }
    const crossIcon = () => {
        setmassage(false);
    }
    const navigetMassageDashboard = () => {
        setMassageDashboard(true)
        setmassage(false);

    }

    const massageCrossBTN = () => {
        setMassageDashboard(false)
    }
    // ========== Menu start ==================
    // ========================================
    const [menu, setMenu] = useState(false);
    // const [profileUI, setProfileUI] = useState(false);
    const menuItem = () => {
        setMenu(true);
        setmassage(false);
        setProfilePictureUploadUI(false)
        setSerchOption(false)

    }
    const navigetProfile = () => {
        naviget('/profilePage')
        setMenu(false);
    }


    // ========================================


    return (

        <>
            <div>
                <div className='w-full bg-primaryColor text-textColor h-screen pt-[30px] px-[10px] relative '>


                    <div className='relative group w-24 h-24 mx-auto '>


                        <img className='rounded-full mx-auto w-full h-full' src={profilePicture} />


                        <div className='absolute  top-0 left-0 w-full h-full rounded-full group-hover:bg-overlay opacity-0 group-hover:opacity-100  flex justify-center items-center cursor-pointer    '>
                            <RiUploadCloud2Fill onClick={UploadImage} className=' text-white text-5xl' />
                        </div>
                    </div>

                    {
                        profilePictureUploadUI &&
                        <div className=' '>
                            <div className='absolute top-[50px] left-[400px] '>
                                <div className='w-[800px] h-[550px] bg-[#7f8fa6] rounded-[12px] py-[20px] px-[50px] font-Raleway '>
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
                        </div>
                    }




                    <p className='Logo text-center text-[#E4F0F6] font-lobster text-[24px] mt-[5px] '>User Name</p>

                    <div className='mt-[30px]   '>

                        <div onClick={homeIcon} className="flex text-center items-center py-[6px] pl-[40px] rounded-[8.6px]       
                            hover:bg-crossHoverBG  hover:duration-700   cursor-pointer  ">

                            <img src={houseIcon} alt="" className='w-[40px] h-[40px]  ' />
                            <p className='ml-[30px] text-[22px] font-sansita font-semibold '>Home</p>
                        </div>

                        {/* ======================= Serch area stat =======================
                    ====================================================================*/}

                        <div onClick={serchSidebarBTN} className="flex text-center mt-[25px] items-center py-[6px] pl-[40px] rounded-[8.6px]       
                            hover:bg-crossHoverBG  hover:duration-700   cursor-pointer  ">

                            <img src={searchIcon} alt="" className='w-[40px] h-[40px]  ' />
                            <p className='ml-[30px] text-[22px] font-sansita font-semibold '>Search</p>
                        </div>
                        {
                            serchOption &&
                            <div className='w-[400px] h-[700px]  bg-overflowIcon absolute top-[10px] left-[380px] drop-shadow-3xl rounded-[12px] px-[20px] py-[10px] overflow-y-scroll '>
                                {/* ========= Search bar area =============== */}
                                <div className='flex justify-between items-center mt-[20px] mb-[20px]  '>
                                    <div className='w-[280px] h-[40px] bg-[#ecf0f1] rounded-[12px] flex items-center relative    '>
                                        {/* ===== Search bar input Design ====== */}
                                        <input type="text" className='w-[240px] bg-inherit px-[8.6px] h-full text-base font-Raleway font-semibold outline-none  rounded-[8.6px] text-[#2c3e50]  ' />
                                        <IoSearch className='absolute top-[5px] right-[10px] text-3xl text-[#2c3e50] '/>
                                    </div>
                                    <div className='flex justify-end h-[45px] '>
                                        <div className='  cursor-pointer hover:border hover:border-4 rounded-full  '>
                                            {/* === Serch Dashboard cross bitton ===== */}
                                            <img onClick={crossSidebarIcon} src={corssBTN} alt="" className='w-[40px] h-[40px]' />
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center text-[#2c3e50] font-Raleway font-bold text-[18px] hover:bg-[#ecf0f1]  hover:duration-700   cursor-pointer py-[8px] pl-[20px]  mt-[10px] ' >

                                    <img src={profilePicture} alt="" className='w-[40px] h-[40px]  ' />

                                    <p className='ml-[20px]    '>Md. Sourov Hossain</p>
                                </div>


                                <div className='mt-[10px] flex items-center text-[#2c3e50] font-Raleway font-bold text-[18px] hover:bg-[#ecf0f1]  hover:duration-700   cursor-pointer py-[8px] pl-[20px] ' >

                                    <img src={profilePicture} alt="" className='w-[40px] h-[40px]  ' />
                                    <p className='ml-[20px]   '>Md. Sourov Hossain</p>
                                </div>
                                <div className='mt-[10px] flex items-center text-[#2c3e50] font-Raleway font-bold text-[18px] hover:bg-[#ecf0f1]  hover:duration-700   cursor-pointer py-[8px] pl-[20px]  ' >

                                    <img src={profilePicture} alt="" className='w-[40px] h-[40px]  ' />
                                    <p className='ml-[20px]   '>Md. Sourov Hossain</p>
                                </div>
                            </div>
                        }

                        <div className='flex text-center mt-[25px] items-center py-[6px] pl-[40px] rounded-[8.6px]       
                            hover:bg-crossHoverBG  hover:duration-700   cursor-pointer '>

                            <img src={friendsIcon} alt="" className='w-[40px] h-[40px]  ' />
                            <p className='ml-[30px] text-[22px]  font-sansita font-semibold '>Friends</p>
                        </div>


                        {/* =============Massage =========== */}
                        {/* ================================ */}

                        <div>
                            <div onClick={massageItem} className='flex text-center mt-[25px] items-center py-[6px] pl-[40px] rounded-[8.6px]       
                            hover:bg-crossHoverBG  hover:duration-700   cursor-pointer '>

                                <img src={chatIcon} alt="" className='w-[40px] h-[40px]  ' />
                                <p className='ml-[30px] text-[22px]   font-sansita font-semibold '>Massage</p>
                            </div>
                            {
                                massage &&
                                <div className='w-[400px] h-[700px]  bg-overflowIcon absolute top-[10px] left-[380px] drop-shadow-3xl rounded-[12px] px-[20px] py-[10px] overflow-y-scroll '>

                                    <div className='flex justify-end h-[45px] '>
                                        <div className='  cursor-pointer hover:border hover:border-4 rounded-full  '>
                                            <img onClick={crossIcon} src={corssBTN} alt="" className='w-[40px] h-[40px]' />
                                        </div>
                                    </div>

                                    <div onClick={navigetMassageDashboard} className='flex items-center text-[#2c3e50] font-Raleway font-bold text-[18px] hover:bg-[#ecf0f1]  hover:duration-700   cursor-pointer py-[8px] pl-[20px]  mt-[10px] ' >

                                        <img src={profilePicture} alt="" className='w-[40px] h-[40px]  ' />

                                        <p className='ml-[20px]    '>Md. Sourov Hossain</p>
                                    </div>


                                    <div className='mt-[10px] flex items-center text-[#2c3e50] font-Raleway font-bold text-[18px] hover:bg-[#ecf0f1]  hover:duration-700   cursor-pointer py-[8px] pl-[20px] ' >

                                        <img src={profilePicture} alt="" className='w-[40px] h-[40px]  ' />
                                        <p className='ml-[20px]   '>Md. Sourov Hossain</p>
                                    </div>
                                    <div className='mt-[10px] flex items-center text-[#2c3e50] font-Raleway font-bold text-[18px] hover:bg-[#ecf0f1]  hover:duration-700   cursor-pointer py-[8px] pl-[20px]  ' >

                                        <img src={profilePicture} alt="" className='w-[40px] h-[40px]  ' />
                                        <p className='ml-[20px]   '>Md. Sourov Hossain</p>
                                    </div>
                                </div>
                            }

                        </div>
                        {/* ============ Massage Dashboard UI ===================== */}
                        {/* ======================================================= */}
                        <div className='absolute top-[105px] left-[990px] '>
                            {
                                massageDashboard &&
                                <div className=' relative '>
                                    <div className='w-[450px] h-[550px] mt-[20px] bg-sceondColor rounded-[8.6px]  '>
                                        <div className='w-full h-[60px] border border-borderColor rounded-t-[8.6px] '>

                                            <div className='flex items-center p-[10px] '>
                                                <img src={profilePicture} alt="" className='w-[40px] h-[40px] rounded-full ml-[30px]  ' />
                                                <p className='ml-[10px] font-Raleway font-bold text-[18px] '>Md. Sourov Hossain</p>
                                                <div onClick={massageCrossBTN} className='border-b-4 border-t-4  py-[4px] mt-[20px]  '>
                                                    <div className='absolute top-[9px] right-[15px]  cursor-pointer hover:border hover:border-4 rounded-full '>
                                                        <img src={corssBTN} alt="" className='w-[40px] h-[40px] ' />
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        <div className='w-full h-[430px] overflow-y-scroll px-[30px] py-[20px] border-b border-borderColor   '>
                                            <div className=' flex '>
                                                <div className='w-[200px]'>
                                                    <p className='px-[20px] py-[8px] bg-primaryColor font-Raleway font-semibold text-base rounded-t-[100px] rounded-br-[100px] inline-block  '>Hey There !</p>
                                                </div>
                                                <div className='w-[200px] mt-[20px] '>
                                                    <p className='px-[20px] py-[8px] bg-primaryColor font-Raleway font-semibold text-base rounded-t-[100px] rounded-bl-[100px] inline-block  '>Hello...</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between mt-[30px] '>
                                                <div className='w-[200px]  '>
                                                    <p className='px-[20px] py-[8px] bg-primaryColor font-Raleway font-semibold text-base rounded-t-[300px] rounded-br-[300px]  inline-block  '> There Hey There !</p>
                                                </div>
                                                <div className='w-[200px] mt-[20px] '>
                                                    <p className='px-[20px] py-[8px] bg-primaryColor font-Raleway font-semibold text-base rounded-t-[100px] rounded-bl-[100px]  inline-block '>Hello...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full h-[60px] flex items-center '>
                                            <MdOutlineAddAPhoto className='text-4xl text-offWhite ml-[20px] ' />
                                            <div className='w-[300px] h-[40px] bg-primaryColor rounded-[12px] ml-[30px] px-[20px]  '>
                                                <input type="text" className='bg-inherit w-full h-full outline-none rounded-[12px]  ' />
                                            </div>
                                            <AiFillLike className='text-4xl ml-[15px] text-[#0984e3] ' />

                                        </div>
                                    </div>
                                    {/* <RxCross2 onClick={massageDashboardBTN} className='absolute top-[10px] right-[30px] text-[#eb2f06] text-3xl p-[3px] cursor-pointer hover:bg-[#f5f6fa] rounded-full' /> */}
                                </div>
                            }
                        </div>




                        <div className='flex text-center mt-[25px] items-center py-[6px] pl-[40px] rounded-[8.6px]       
                            hover:bg-crossHoverBG  hover:duration-700   cursor-pointer '>

                            <img src={friendRequest} alt="" className='w-[40px] h-[40px]  ' />
                            <p className='ml-[30px] text-[22px]  font-sansita font-semibold '>Friend Request</p>
                        </div>


                        <div className='flex text-center mt-[25px] items-center py-[6px] pl-[40px] rounded-[8.6px]       
                            hover:bg-crossHoverBG  hover:duration-700   cursor-pointer '>

                            <img src={createIcon} alt="" className='w-[40px] h-[40px]  ' />
                            <p className='ml-[30px] text-[22px]  font-sansita font-semibold '>Create Post </p>
                        </div>

                        {/* ============ Menu ================== */}
                        <div>
                            <div onClick={menuItem} className='flex text-center mt-[25px] items-center py-[6px] pl-[40px] rounded-[8.6px]       
                            hover:bg-crossHoverBG  hover:duration-700   cursor-pointer '>

                                <img src={menuIcon} alt="" className='w-[40px] h-[40px]  ' />
                                <p className='ml-[30px] text-[22px]  font-sansita font-semibold '>Menu</p>
                            </div>
                            {
                                menu &&
                                <div className='w-[400px]  bg-overflowIcon absolute bottom-[10px] left-[380px] drop-shadow-3xl rounded-[12px] px-[20px] py-[10px]  '>

                                    <div onClick={navigetProfile} className='flex items-center text-[#2c3e50] font-Raleway font-bold text-[18px] hover:bg-[#ecf0f1]  hover:duration-700   cursor-pointer py-[8px] pl-[50px] rounded-t-[16px] ' >

                                        <img src={profilePicture} alt="" className='w-[40px] h-[40px]  ' />
                                        <p className='ml-[20px]   '>Profile</p>
                                    </div>



                                    <div className='mt-[10px] flex items-center text-[#2c3e50] font-Raleway font-bold text-[18px] hover:bg-[#ecf0f1]  hover:duration-700   cursor-pointer py-[8px] pl-[50px] rounded-b-[16px] ' >

                                        <img src={LogoutIcon} alt="" className='w-[40px] h-[40px]  ' />
                                        <p className='ml-[20px]   '>Log out</p>
                                    </div>
                                </div>

                            }
                        </div>



                        <div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default SideBar