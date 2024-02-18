import React, { useState } from 'react'
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const auth = getAuth();
    const naviget = useNavigate();

    const [emailLogin, setEmailLogin] = useState();
    const [passwordLogin, setPasswordLogin] = useState();

    const [emailErrorLogin, setEmailErrorLogin] = useState();
    const [passwordErrorLogin, setPasswordErrorLogin] = useState();

    const [passwordShowLogin, setPasswordShowLogin] = useState(false)

    const [success, setSuccess] = useState();

    const [loginUI, setLoginUI] = useState(false)

    const inputEmailLogin = (e) => {
        setEmailLogin(e.target.value)
        setEmailErrorLogin('')
    }

    const inputPasswordLogin = (p) => {
        setPasswordLogin(p.target.value)
        setPasswordErrorLogin('')
    }

    const LoginAccountBTN = () => {
        if (!emailLogin) {
            setEmailErrorLogin('Enter your email')
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailLogin)) {
            setEmailErrorLogin('Enter your valid email')
        }
        if (!passwordLogin) {
            setPasswordErrorLogin('Enter your password')
        }
        if (emailLogin && passwordLogin && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailLogin))) {
            signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
                .then(() => {
                    toast.success('Login is successfull')
                    setTimeout(()=>{

                        naviget('/Home')
                    },2000)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    if(errorCode.includes('auth/invalid-credential')){
                        setEmailErrorLogin('input data not match')
                    }
                    
                });

        }

    }

    return (
        <>
            <div className='w-full h-screen bg-LoginBackground bg-no-repeat bg-cover relative
            flex items-center'>
                <div className='w-[800px] h-[520px] bg-overflowLogin mx-auto rounded-[16px] px-[150px] pt-[40px] '>
                    <div>
                        <ToastContainer
                            position="top-center"
                            autoClose={1000}
                            theme="#32ff7e"
                            className="font-mideum font-lobster text-[18px] text-[]  "

                        />
                    </div>
                    <div>
                        <h1 className='font-Roboto font-bold text-3xl text-center border-y-[2px] border-[#2f3542] py-[5px] '>Login Now</h1>
                        <div className=' mt-[20px]  '>
                            <div className='py-[12px] px-[50px] rounded-[8.6px] bg-[#f1f2f6] inline-block cursor-pointer'>
                                <div className='flex items-center  '>
                                    <FcGoogle className='text-3xl' />
                                    <p className='font-Raleway font-semibold text-[18px] pl-[12px]  '>Login with google account</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative mt-[20px] text-[#2f3542] '>
                            <p className='font-Raleway font-bold text-[16px] pl-[31px] pb-[5px] '>Email :</p>

                            <div onChange={inputEmailLogin} className=' border rounded-[8.6px] border-[#2f3542] py-[12px]  '>
                                <input type="text" placeholder='Enter your email' className=' w-full outline-none px-[30px] bg-inherit  ' />
                            </div>
                            {
                                emailErrorLogin
                                &&
                                <p className='absolute bottom-[-24px] right-[15px] flex items-center font-Raleway  text-[#eb2f06] text-[17px] font-semibold '><BsExclamationCircle className=' mr-[5px] ' /> {emailErrorLogin} </p>
                            }

                        </div>

                        <div className='mt-[20px] text-[#2f3542] '>
                            <p className='font-Raleway font-bold text-[16px] pl-[31px] pb-[5px] '>Password :</p>
                            <div onChange={inputPasswordLogin} className=' border rounded-[8.6px] border-[#2f3542] py-[12px]  relative '>
                                {
                                    passwordShowLogin ?
                                        <IoEye onClick={() => setPasswordShowLogin(!passwordShowLogin)} className='absolute top-[9px] right-[17px] text-3xl ' />
                                        :
                                        <IoEyeOff onClick={() => setPasswordShowLogin(!passwordShowLogin)} className='absolute top-[9px] right-[17px] text-3xl ' />
                                }

                                <input type={passwordShowLogin ? "text" : "password"} placeholder='Enter your email' className=' w-[450px] outline-none px-[30px] bg-inherit text-[16px]  ' />
                                {
                                    passwordErrorLogin
                                    &&
                                    <p className='absolute bottom-[-24px] right-[15px] flex items-center font-Raleway  text-[#eb2f06] text-[17px] font-semibold '><BsExclamationCircle className=' mr-[5px] ' /> {passwordErrorLogin} </p>
                                }
                            </div>
                        </div>
                        {/* =================== Create Account BTN ============== */}
                        <div className='text-center mt-[30px] '>
                            <p onClick={LoginAccountBTN} className='py-[12px] px-[45px]  bg-btnColor inline-block font-Raleway font-semibold text-[18px] text-white rounded-[8.6px] cursor-pointer '>Login account</p>
                        </div>


                        <p className='text-center mt-[20px] font-Raleway font-semibold text-[#2f3542] text-[16px]  '>Don’t have an account ? <Link to='/Registration' className='font-bold text-[#3742fa] cursor-pointer ' >Sign Up</Link> </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login