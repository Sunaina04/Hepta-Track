import React, { Component } from 'react';
import { useState, useRef } from 'react'
import { useNavigate , Link } from 'react-router-dom'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { ProgressSpinner } from 'primereact/progressspinner'
import { Toast } from 'primereact/toast'


class ForgotPassword extends Component {
  render() {
    return(
      <>
      <Toast 
      // ref={toast}
       />
      <div
        className="w-full h-screen flex justify-center items-center"
        style={{
          backgroundColor: "#052316",
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

          <div className="flex flex-col justify-center text-center mt-[3rem]">
            {/* {errors && (
              <div className="mb-4">
                <span className="text-red-500 text-sm">
                  {errors}
                  </span>
              </div>
            )}
            {message && (
              <div className="mb-4">
                <span className="text-green-500 text-sm">{message}</span>
              </div>
            )} */}
            <div className="flex flex-col gap-5">
              <div className="p-input-icon-left relative flex justify-center ">
                <div className="p-input-icon-left relative flex justify-center">
                  <InputText
                    style={{
                      width: '500px',
                      height: '60px',
                      padding: '0 4rem 0 3rem',
                      border: '1px solid #C5D9E0',
                      fontSize: '16px',
                      color: '#00426F',
                      borderRadius: '10px',
                    }}
                    // value={email}
                    // type="email"
                     placeholder="Enter Your registered email"
                    // onChange={handleChange}
                    // onKeyUp={handleKeyUp}
                  />
                  <img
                    src="/assets/images/envelope.png"
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
                strokeWidth="4"
              />
            )} */}

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
              Lorem Ipsum is simply dummy text of prinitng and typesetting industry.
              Lorem ipsum has been the industry's standard dummy text ever since the 1500's
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
                color: '#00426F',
                borderRadius: '10px',
                backgroundColor: '#00B300',
                textAlign: 'center',
                display: 'flex',
                fontWeight: '500',
                justifyContent: 'center',
              }}
              //onClick={handleSubmit}
              >
              <Link to="/ResetPassword">Submit</Link>
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
              // onClick={() => navigateToLoginPage('/Login')}
              >
              <Link to="/">Back</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
    )
  }
}

export default ForgotPassword;