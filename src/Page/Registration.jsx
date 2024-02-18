import React, { useState } from 'react'
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification  } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';



const Registration = () => {
  const auth = getAuth();
  const naviget = useNavigate()

  const [email, setEmail] = useState();
  const [fullname, setFullname] = useState();
  const [password, setPassword] = useState();

  const [emailError, setEmailError] = useState();
  const [fullnameError, setFullnameError] = useState();
  const [passwordError, setPasswordError] = useState();

  const [passwordShow, setPasswordShow] = useState(false);

  const [success, setSuccess] = useState();

  const inputEmail = (e) => {
    setEmail(e.target.value)
    setEmailError('')
  }
  const inputFullName = (f) => {
    setFullname(f.target.value)
    setFullnameError('')
  }
  const inputPassword = (p) => {
    setPassword(p.target.value)
    setPasswordError('')
  }


  const createAccountBTN = () => {
    if (!email) {
      setEmailError('Enter your email')
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError('Enter your valid email')
    }
    if (!fullname) {
      setFullnameError('Enter your full name')
    }
    if (!password) {
      setPasswordError('Enter your password')
    }
    if (email && fullname && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      createUserWithEmailAndPassword(auth, email, password).then(() => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            toast.success('Registration done please verify your email');
            setTimeout(() => {

              naviget('/Login')

            }, 2000)
          });



      }).catch((error) => {
        if (error.code.includes('auth/email-already-in-use')) {
          setEmailError('This email already used')
        }

      })

    }


  }




  return (
    <>

      <div className=''>
        <div className=''>

          <div className='w-full h-screen bg-RegBackground bg-no-repeat bg-cover  rounded-bl- relative
            flex items-center'>
            <div className='w-[800px] h-[520px] bg-overflow mx-auto rounded-[16px] px-[150px] pt-[40px] '>

              <div>
                <ToastContainer
                  position="top-center"
                  autoClose={1000}
                  theme="#32ff7e"
                  className="font-mideum font-lobster text-[18px] text-[]  "

                />
              </div>

              {/* ************** Registration area start ******************** */}
              {/* ============================================================= */}

              <div>
                <h1 className='font-Roboto font-bold text-3xl text-center border-y-[2px] border-[#2f3542] py-[5px] '>Registration Now </h1>
                <div className='relative mt-[20px] text-[#2f3542] '>
                  <p className='font-Raleway font-bold text-[16px] pl-[31px] pb-[5px] '>Email :</p>

                  <div onChange={inputEmail} className=' border rounded-[8.6px] border-[#2f3542] py-[12px]  '>
                    <input type="text" placeholder='Enter your email' className=' w-full outline-none px-[30px] bg-inherit  ' />
                  </div>
                  {
                    emailError
                    &&
                    <p className='absolute bottom-[-24px] right-[15px] flex items-center font-Raleway  text-[#eb2f06] text-[17px] font-semibold '><BsExclamationCircle className=' mr-[5px] ' /> {emailError} </p>
                  }

                </div>

                <div className='relative mt-[20px] text-[#2f3542] '>
                  <p className='font-Raleway font-bold text-[16px] pl-[31px] pb-[5px] '>Full name :</p>

                  <div onChange={inputFullName} className=' border rounded-[8.6px] border-[#2f3542] py-[12px]  '>
                    <input type="text" placeholder='Enter your email' className=' w-full outline-none px-[30px] bg-inherit  ' />
                  </div>
                  {
                    fullnameError
                    &&
                    <p className='absolute bottom-[-24px] right-[15px] flex items-center font-Raleway  text-[#eb2f06] text-[17px] font-semibold '><BsExclamationCircle className=' mr-[5px] ' /> {fullnameError} </p>
                  }

                </div>

                <div className='mt-[20px] text-[#2f3542] '>
                  <p className='font-Raleway font-bold text-[16px] pl-[31px] pb-[5px] '>MPassword :</p>
                  <div onChange={inputPassword} className=' border rounded-[8.6px] border-[#2f3542] py-[12px]  relative '>
                    {
                      passwordShow ?
                        <IoEye onClick={() => setPasswordShow(!passwordShow)} className='absolute top-[9px] right-[17px] text-3xl ' />
                        :
                        <IoEyeOff onClick={() => setPasswordShow(!passwordShow)} className='absolute top-[9px] right-[17px] text-3xl ' />
                    }

                    <input type={passwordShow ? "text" : "password"} placeholder='Enter your email' className=' w-[450px] outline-none px-[30px] bg-inherit text-[16px]  ' />
                    {
                      passwordError
                      &&
                      <p className='absolute bottom-[-24px] right-[15px] flex items-center font-Raleway  text-[#eb2f06] text-[17px] font-semibold '><BsExclamationCircle className=' mr-[5px] ' /> {passwordError} </p>
                    }
                  </div>
                </div>

                {/* =================== Create Account BTN ============== */}
                <div className='text-center mt-[30px] '>
                  <p onClick={createAccountBTN} className='py-[12px] px-[45px]  bg-btnColor inline-block font-Raleway font-semibold text-[18px] text-white rounded-[8.6px] cursor-pointer '>Create account</p>
                </div>
                <p className='text-center mt-[10px] font-Raleway font-semibold text-[#2f3542] text-[16px]  '>Already have an account ?<Link to='/Login' className='font-bold text-[#3742fa] cursor-pointer ' >Sign In</Link></p>





              </div>



            </div>


          </div>

        </div>


      </div>
    </>
  )
}

export default Registration