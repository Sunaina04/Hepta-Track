import React, { Component } from 'react'
import { useState, useRef, useEffect } from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { ProgressSpinner } from 'primereact/progressspinner'
import { Toast } from 'primereact/toast'
import { loadingBlur } from '../Utils/Style'

const ForgotPassword = () => {

  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(true);


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
      errors.email = "Entered email is not registered with us, Please enter a valid email address";
    }

    setErrorMessage(errors);


    return Object.keys(errors).length === 0;
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      navigate('/resetPassword')
    }
  };


  return (
    <>
      <Toast
      // ref={toast}
      />
      <div
        className="w-full h-screen flex justify-center items-center"
        style={{
          backgroundColor: '#052316',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}>
        <div
          className="bg-white rounded-xl p-8 w-[600px] relative gap-8 h-[auto] overflow-auto"
          style={{ maxHeight: '100vh' }}>
          <div className="text-center mt-[1rem]">
            <img
              src="/assets/images/Group 5.png"
              alt="Logo"
              className="mx-auto w-60 h-14 mb-5 "
            />
          </div>

          <div className="flex flex-col justify-center mt-[3rem]">
            {/* 
            {message && (
              <div className="mb-4">
                <span className="text-green-500 text-sm">{message}</span>
              </div>
            )} */}
            {errorMessage.email && (
              <div className="text-red-500 text-sm ml-10 mb-2">{errorMessage.email}</div>
            )}

            <div className="flex flex-col gap-5">
              <div className="p-input-icon-left relative flex justify-center ">
                <div className="p-input-icon-left relative flex justify-center">
                  <InputText
                    style={{
                      width: '500px',
                      height: '60px',
                      padding: '0 4rem 0 3rem',
                      border: '1px solid #C5D9E0',
                      fontSize: '13px',
                      color: '#00426F',
                      borderRadius: '10px',
                    }}
                    value={email}
                     type="email"
                    placeholder={isLoading ? 'Loading...' : 'Enter Your Registered Email'}
                    onChange={(e) => setEmail(e.target.value)}
                  // onKeyUp={handleKeyUp}
                  />
                  <img
                    src="/assets/icons/envelope.png"
                    alt="Search Icon"
                    className="p-clickable"
                    style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '20px',
                      height: '15px',
                      color: '#00426f',
                      fontSize: '900',
                    }}
                  />
                </div>
              </div>

            </div>

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

            <div
              className="flex mt-8 cursor-pointer"
              style={{
                width: '500px',
                height: '72px',
                gap: '0px',
                color: '#082825',
                fontSize: '14px',
                lineHeight: '24px',
                textAlign: 'center',
              }}>
              <p>
                Lorem Ipsum is simply dummy text of prinitng and typesetting industry. Lorem ipsum
                has been the industry's standard dummy text ever since the 1500's
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center mt-20">
            <Button
              style={{
                width: '500px',
                height: '60px',
                padding: '0 4rem 0 3rem',
                border: '1px solid #C5D9E0',
                fontSize: '22px',
                lineHeight: '25.78px',
                color: 'white',
                borderRadius: '10px',
                backgroundColor: '#00B300',
                textAlign: 'center',
                display: 'flex',
                fontWeight: '500',
                justifyContent: 'center',
              }}
              onClick={handleSave}
            >
              Submit
            </Button>

            <Button
              style={{
                width: '500px',
                height: '60px',
                padding: '0 4rem 0 3rem',
                fontSize: '22px',
                lineHeight: '25.78px',
                color: '#00426F',
                borderRadius: '10px',
                backgroundColor: '#F2F2F2',
                textAlign: 'center',
                display: 'flex',
                fontWeight: '500',
                justifyContent: 'center',
              }}
              className="mt-5 "
              onClick={() => navigate('/login')}
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </>
  )

}

export default ForgotPassword
