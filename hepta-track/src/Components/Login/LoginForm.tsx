import React, { Component, useRef, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'
import { Password } from 'primereact/password'
import './login.css'
import { ProgressSpinner } from 'primereact/progressspinner'
import { loadingBlur } from '../Utils/Style'


const LoginForm = () => {

  // const toast = useRef < Toast > null

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);



  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};

    if (email.trim() === "") {
      errors.email = "Email is required";
    }

    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (password.trim() === "") {
      errors.password = "Password is required";
    }

    setErrorMessage(errors);


    return Object.keys(errors).length === 0;
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    
    if (isValid) {  
      navigate('/dashboard')
  }
  };

  return (

    <>
      {/* <Toast ref={toast} /> */}
      <div
        className="w-full h-screen flex justify-center items-center"
        id="header"
        style={{
          backgroundImage: "url('/assets/images/loginBackgroundImage.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'auto',
          backgroundColor: '#052316',
        }}>
        <div
          className={`bg-white rounded-xl p-8 top-227 left-420 gap-8 h-auto}`}
          style={{
            width: '600px',
            position: 'relative',
            overflow: 'auto',
            maxHeight: '100vh',
          }}>
          <div className="text-center mt-[1rem]">
            <img
              src="/assets/images/Group 5.png"
              alt="Logo"
              className="mx-auto w-60 h-14 mb-5"
              id="logo"
            />
          </div>

          <div className="flex flex-col justify-center  mt-[5rem] min-[320px]:w[270px]">
            <div className="flex flex-col items-center">
              <div className="p-input-icon-left" id="input-field">
                <InputText
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // onKeyUp={handleKeyUp}
                
                  placeholder={isLoading ? 'Loading...' : 'Enter Your Email'}
                  id="input-field"
                  style={{
                    width: '500px',
                    height: '60px',
                    padding: '0 4rem 0 3rem',
                    border: '1px solid #D5E1EA',
                    fontSize: '14px',
                    borderRadius: '10px',
                  }}
                />

                <img
                  src="/assets/icons/envelope.png"
                  alt="Envelope Icon"
                  className="p-clickable"
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '20px',
                    height: '15px',
                  }}
                />
              </div>
              {errorMessage.email && (
                <div className="w-full mt-2">
                  <div className="text-red-500 text-sm ml-6">{errorMessage.email}</div>
                </div>
              )}

              <div className="p-input-icon-left mt-3">
                <Password
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  feedback={false}

                 
                  placeholder={isLoading ? 'Loading...' : 'Enter Your Password'}
                  inputClassName="custom-password"
                  style={{
                    width: '500px',
                    height: '58px',
                    border: '1px solid #D5E1EA',
                    padding: '1.2rem 0rem 1rem 3rem',
                    fontSize: '13px',
                    borderRadius: '10px',
                  }}
                  toggleMask
                />
                <img
                  src="/assets/icons/key.png"
                  alt="Key Icon"
                  className="p-clickable"
                  style={{
                    position: 'absolute',
                    left: '13px',
                    top: '55%',
                    transform: 'translateY(-50%)',
                    width: '22px',
                    height: '20px',
                    pointerEvents: 'none',
                  }}
                />
              </div>
              {errorMessage.password && (
                <div className="w-full mt-2">
                  <div className="text-red-500 text-sm ml-6">{errorMessage.password}</div>
                </div>
              )}


              {isLoading && (
                <ProgressSpinner
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '50px',
                    height: '50px',
                  }}
                />
              )}
              <div className="flex justify-end mb-8 mt-5 w-[500px] cursor-pointer underline">
                <span
                  className="font-normal"
                  style={{
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '18.75px',
                    textAlign: 'right',
                    color: 'black',
                  }}>
                  <Link to={'/forgotPassword'} className="text-black">
                    Forgot password?
                  </Link>
                </span>
              </div>

              <Button
                style={{
                  width: '500px',
                  height: '60px',
                  minHeight: '60px',
                  padding: '0 4rem 0 3rem',
                  border: '1px solid #C5D9E0',
                  fontSize: '22px',
                  lineHeight: '25.78px',
                  color: 'green',
                  borderRadius: '10px',
                  backgroundColor: 'green',
                  textAlign: 'center',
                  display: 'flex',
                  fontWeight: '500',
                  justifyContent: 'center',
                }}
                onClick={handleSave}
               
              >
                <p className="text-white">Login</p>
              </Button>
            </div>
          </div>
          <div
            style={{
              width: '500px',
              fontSize: '14px',
              textAlign: 'center',
              lineHeight: '22px',
            }}>
            <p className="text-center mt-8 text-[#00426F] leading-6 font-[400]">
              Lorem Ipsum is simply dummy text of prinitng and typesetting industry. Lorem ipsum has
              been the industry's standard dummy text ever since the 1500's
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm
