import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { Component, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";
import { Toast } from "primereact/toast";
import { Divider } from "primereact/divider";
import { Password } from "primereact/password";
import "./ResetPassword.css";

class ResetPassword extends Component {
  render() {
    return (
      <>
        <div
          className="w-full h-screen flex justify-center items-center"
          id="message"
          style={{
            backgroundColor: "#052316",
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflow: "hidden",
          }}
        >
          <div
            className="bg-white rounded-xl p-8 w-600 absolute top-227 left-420 gap-8 h-auto"
            style={{
              maxHeight: "100vh",
              overflowY: "auto",
            }}
          >
            <div className="text-center mt-[1rem]">
              <img
                src="/assets/images/Group 5.png"
                alt="Logo"
                className="mx-auto w-60 h-14 mb-5"
              />
            </div>
            <div className="flex flex-col justify-center text-center">
              <div className="flex flex-col gap-5 mt-20">
                {/* {message && (
            <div className="flex justify-center">
              <span className="text-red-500 text-sm break-words max-w-md overflow-wrap-normal">
                {message}
              </span>
            </div>
          )} */}
                <div>
                  <div
                    className="card flex justify-content-center"
                    style={{ position: "relative", width: "100%" }}
                  >
                    <Password
                      placeholder="New Password"
                      name="newPassword"
                      type="text"
                      // onChange={handleChange}
                      // value={password}
                      // footer={footer}
                      toggleMask
                      style={{
                        padding: "1rem 4rem 0 3rem",
                        border: "1px solid #C5D9E0",
                        fontSize: "16px",
                        color: "#00426F",
                        borderRadius: "10px",
                        width: "500px",
                        height: "60px",
                      }}
                    />
                    <img
                      src="/assets/images/key.png"
                      alt="Key Icon"
                      className="p-clickable"
                      style={{
                        position: "absolute",
                        left: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "20px",
                        height: "20px",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </div>
                {/* 
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
              strokeWidth="4"
            />
          )} */}
                <div className="p-input-icon-left relative flex justify-center">
                  <div>
                    <div className="card flex justify-content-center">
                      <Password
                        toggleMask
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        // onChange={handleChange}
                        // value={confirmPassword}
                        // footer={footer}

                        style={{
                          padding: "1rem 4rem 0 3rem",
                          border: "1px solid #C5D9E0",
                          fontSize: "16px",
                          color: "#00426F",
                          borderRadius: "10px",
                          width: "500px",
                          height: "60px",
                        }}
                      />
                    </div>
                  </div>
                  <img
                    src="/assets/images/key.png"
                    alt="Key Icon"
                    className="p-clickable"
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-8">
              <Button
                style={{
                  width: "500px",
                  height: "60px",
                  minHeight: "60px",
                  padding: "0 4rem 0 3rem",
                  border: "1px solid #C5D9E0",
                  fontSize: "22px",
                  lineHeight: "25.78px",
                  color: "#FFFFFF",
                  borderRadius: "10px",
                  backgroundColor: "#00B300",
                  textAlign: "center",
                  display: "flex",
                  fontWeight: "500",
                  justifyContent: "center",
                }}
                //onClick={handleResetPassword}
              >
                <p>Confirm</p>
              </Button>
              <Button
                style={{
                  width: "500px",
                  height: "60px",
                  top: "20px",
                  padding: "0 4rem 0 3rem",
                  fontSize: "22px",
                  lineHeight: "25.78px",
                  color: "#00426F",
                  borderRadius: "10px",
                  backgroundColor: "#F2F2F2",
                  textAlign: "center",
                  display: "flex",
                  fontWeight: "500",
                  justifyContent: "center",
                  marginBottom: "30px",
                }}
                //onClick={() => navigateToLoginPage('/Login')}
              >
                <Link to="/ForgotPassword">Back</Link>
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ResetPassword;
