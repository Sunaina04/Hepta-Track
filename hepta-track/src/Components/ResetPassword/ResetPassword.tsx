import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React, { Component, useState } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { ProgressSpinner } from 'primereact/progressspinner'
import { Toast } from 'primereact/toast'
import { Divider } from 'primereact/divider'
import { Password } from 'primereact/password'
import './ResetPassword.css'
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



const ResetPassword = () => {

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();


  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};
    const passwordValidationRegex = {
      lowercase: /[a-z]/, // At least one lowercase letter
      uppercase: /[A-Z]/, // At least one uppercase letter
      numeric: /\d/, // At least one numeric character
      length: /.{8,}/, // At least 8 characters
    };

    const passwordErrors: string[] = [];

    // Password Validation
    if (password.trim() === "") {
      passwordErrors.push("Password is required");
    } else {
      if (!passwordValidationRegex.lowercase.test(password)) {
        passwordErrors.push("Password must contain at least one lowercase letter");
      }
      if (!passwordValidationRegex.uppercase.test(password)) {
        passwordErrors.push("Password must contain at least one uppercase letter");
      }
      if (!passwordValidationRegex.numeric.test(password)) {
        passwordErrors.push("Password must contain at least one numeric character");
      }
      if (!passwordValidationRegex.length.test(password)) {
        passwordErrors.push("Password must be at least 8 characters long");
      }
    }

    if (passwordErrors.length > 0) {
      errors.password = passwordErrors.join(". ");
    }

    // Confirm Password Validation
    if (confirmPassword.trim() === "") {
      errors.confirmpassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      errors.confirmpassword = "Passwords do not match";
    }

    setErrorMessage(errors);
    return Object.keys(errors).length === 0;
  };


  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      navigate('/login');
    }
  };

  const header = <div className="font-bold mb-3">Pick a password</div>;
  const footer = (
    <>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0 line-height-3">
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </>
  );



  const customTemplate = (value: string) => {
    return (
      <ul>
        <li style={{ color: value.length >= 8 ? 'green' : 'red' }}>
          At least 8 characters
        </li>
        <li style={{ color: /[A-Z]/.test(value) ? 'green' : 'red' }}>
          At least one uppercase letter
        </li>
        <li style={{ color: /[0-9]/.test(value) ? 'green' : 'red' }}>
          At least one number
        </li>
      </ul>
    );
  };




  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center"
        id="message"
        style={{
          backgroundColor: '#052316',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}>
        <div
          className="bg-white rounded-xl p-8 w-600 absolute top-227 left-420 gap-8 h-auto"
          style={{
            maxHeight: '100vh',
            overflowY: 'auto',
          }}>
          <div className="text-center mt-[1rem]">
            <img src="/assets/images/Group 5.png" alt="Logo" className="mx-auto w-60 h-14 mb-5" />
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
                  style={{ position: 'relative', width: '100%' }}>
                  <Password
                    placeholder="New Password"
                    name="newPassword"
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    feedback={true}
                    header={header}
                    footer={footer}
                    toggleMask
                    style={{
                      width: '500px',
                      height: '58px',
                      border: '1px solid #D5E1EA',
                      padding: '1rem 1rem 1rem 3rem',
                      fontSize: '13px',
                      borderRadius: '10px',
                    }}
                  />
                  <img
                    src="/assets/icons/key.png"
                    alt="Key Icon"
                    className="p-clickable"
                    style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '20px',
                      height: '20px',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
              </div>
              {errorMessage.password && (
                <div className="text-left ml-1 -mt-3">
                  <ul className="text-red-500 text-sm list-none pl-0 pr-0">
                    {errorMessage.password.split(". ").map((err, index) => (
                      <li key={index}>{err}</li>
                    ))}
                  </ul>
                </div>
              )}



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
          )}  */}
              <div className="p-input-icon-left relative flex justify-center">
                <div>
                  <div className="card flex justify-content-center">
                    <Password
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                      footer={footer}
                      feedback={true}
                      header={header}
                      toggleMask
                      style={{
                        width: '500px',
                        height: '58px',
                        border: '1px solid #D5E1EA',
                        padding: '1rem 2rem 1rem 3rem',
                        fontSize: '13px',
                        borderRadius: '10px',
                      }}

                    />

                  </div>
                </div>
                <img
                  src="/assets/icons/key.png"
                  alt="Key Icon"
                  className="p-clickable"
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '20px',
                    height: '20px',
                  }}
                />
              </div>
              {errorMessage.confirmpassword && (
                <div className='text-red-500 text-sm text-left ml-1 -mt-3'>{errorMessage.confirmpassword}</div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center mt-8">
            <Button
              style={{
                width: '500px',
                height: '60px',
                minHeight: '60px',
                padding: '0 4rem 0 3rem',
                border: '1px solid #C5D9E0',
                fontSize: '22px',
                lineHeight: '25.78px',
                color: '#FFFFFF',
                borderRadius: '10px',
                backgroundColor: '#00B300',
                textAlign: 'center',
                display: 'flex',
                fontWeight: '500',
                justifyContent: 'center',
              }}
              onClick={handleSave}
            >
              <p>Confirm</p>
            </Button>
            <Button
              style={{
                width: '500px',
                height: '60px',
                top: '20px',
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
                marginBottom: '30px',
              }}
              onClick={() => navigate('/forgotPassword')}
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </>
  )

}

export default ResetPassword
