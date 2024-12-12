import React, { Component, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'
import { Password } from 'primereact/password'
import './login.css'

const LoginForm = () => {
  // const toast = useRef < Toast > null
  const navigate = useNavigate()

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
          <div className="flex flex-col justify-center text-center mt-[5rem] min-[320px]:w[270px]">
            <div className="text-red-500 mb-2 text-sm">
              {/* {errors.email && <p>{errors.email}</p>} */}
            </div>
            <div className="flex flex-col items-center">
              <div className="p-input-icon-left" id="input-field">
                <InputText
                  name="username"
                  // value={username}
                  // onChange={handleChange}
                  // onKeyUp={handleKeyUp}
                  // disabled={isLoading}
                  // placeholder={isLoading ? 'Loading...' : 'Enter Your Email'}
                  id="input-field"
                  style={{
                    width: '500px',
                    height: '60px',
                    padding: '0 4rem 0 3rem',
                    border: '1px solid #C5D9E0',
                    fontSize: '14px',
                    color: 'black',
                    borderRadius: '10px',
                  }}
                />
                <img
                  src="/assets/images/envelope.png"
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
              <div className="text-red-500 mb-5 mt-3 text-sm">
                {/* {<p>{errors.password}</p>} */}
              </div>
              <div className="p-input-icon-left">
                <div
                  className="card flex justify-content-center"
                  style={{ position: 'relative', width: '100%' }}>
                  <Password
                    type={'text'}
                    name="password"
                    // value={password}
                    // onChange={handleChange}
                    // onKeyUp={handleKeyUp}
                    // feedback={false}
                    // toggleMask
                    // disabled={isLoading}
                    // placeholder={isLoading ? 'Loading...' : 'Enter Your Password'}
                    style={{
                      padding: '0 2rem 0 3rem',
                      border: '1px solid #C5D9E0',
                      fontSize: '18px',
                      color: 'black',
                      borderRadius: '10px',
                      width: '500px',
                      height: '60px',
                    }}
                  />
                  <img
                    src="/assets/images/key.png"
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
              </div>

              {/* {isLoading && (
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
                )} */}
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
                onClick={() => navigate('/dashboard')}
                // disabled={isLoading}
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
