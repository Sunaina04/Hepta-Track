import React, { useState, useEffect, useCallback, useRef, useContext } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { IoIosAdd } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { GrFormSubtract } from 'react-icons/gr'
import { FaFileUpload, FaLessThanEqual } from 'react-icons/fa'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { AddAgentProps } from '../../Type/ComponentBasedTypes'
import { setOpen } from '../../Store/Slice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Store/Store'
import { addressStyle, dialogStyle, dropdownStyle, inputTextStyle, dialogblur, saveButtonStyle, backButtonStyle, deleteButtonStyle, savePassword } from '../Utils/Style'
import './AddAgent.css'
import { ProgressSpinner } from 'primereact/progressspinner'


const AddAgent: React.FC<AddAgentProps> = ({ visible, setVisible }) => {
  const [agentName, setAgentName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address,setAddress] = useState("")
  const [role,setRole] = useState("")
  const [accountStatus,setAccountStatus] = useState("")
  const [newPassword,setNewPasssword] = useState("")
  const [confirmNewPassword,setConfirmNewPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>({})
  
  
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);

  const validateForm = () => {
    let errors: { [key: string]: string } = {};

    if (!agentName) {
        errors.agentname = "Agent name is required";
    }

    if (!phone) {
      errors.phone = "Phone No is required"
    }

    if (!email) {
        errors.email = "Email is required"
    }
 
    if (!address) {
      errors.address = "All Address Fields are required"
  }

   if(!role) {
    errors.role = "Role is required"
   }

    if(!accountStatus) {
      errors.accountStatus = "Account Status is required"
    }

    if(!newPassword) {
      errors.newPassword = "New Password is required"
    }

    if(!confirmNewPassword) {
      errors.confirmNewPassword = "Confirm New Password is required"
    }

    setErrorMessage(errors);
    return Object.keys(errors).length === 0;
};


const handleSave = () => {
    const isValid = validateForm()
}

  return (
    <>

    

      <div>

          <div className='p-7'>
            <h1 className="font-bold text-2xl">Edit/Add Agent  <IoClose className='ml-[830px] -mt-7' size={35} color="#000000" onClick={() => setVisible(false)} /></h1>

            <div className="flex mt-4">
              {/* User Name */}
              <div>
                <div>
                  <span className="text-sm">
                    
                      Agent Name
                   
                  </span>
                  <div className="mt-2"></div>
                  <InputText
                    style={inputTextStyle}
                  />
                    {errorMessage.agentname && (
                     <div className="text-red-500 text-sm mt-1">{errorMessage.agentname}</div>
                       )}
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col items-start mt-1" style={{ marginLeft: '20px' }}>
                <label className="text-sm  mb-1">Phone</label>
                <InputText
                  style={inputTextStyle}
                />
                 {errorMessage.phone && (
                     <div className="text-red-500 text-sm mt-1">{errorMessage.phone}</div>
                       )}
              </div>
              


              {/* Email */}

              <div className="flex flex-col items-start mt-1" style={{ marginLeft: '20px' }}>
                <label className="text-sm mb-1">Email Address</label>
                <InputText
                 style={inputTextStyle}
                />
                  {errorMessage.email && (
                     <div className="text-red-500 text-sm mt-1">{errorMessage.email}</div>
                       )}
              </div>
            </div>


            <div className='px-1'>
              {/* Address Heading */}
              <h2 className="text-sm mt-4 mb-2">Address</h2>
             

              {/* Address Fields */}
              <div className="grid lg:grid-cols-4 gap-0 -ml-5">
                {/* Street/Building */}
                <InputText
                  placeholder="Street/Building"
                  style={addressStyle}
                />

                {/* Apt/Suite */}
                <InputText
                  placeholder="Apt/Suite"
                  style={addressStyle}
                />

                {/* Country */}
                <Dropdown
                  placeholder="Country"
                  editable
                  style={addressStyle}
                />

                {/* State */}
                <Dropdown
                  placeholder="State"
                  editable
                  style={addressStyle}
                />

                {/* Zip Code */}
                <div className="col-span-2 lg:col-span-1 mt-4">
                  <InputText
                    placeholder="Zip Code"
                    style={addressStyle}
                  />
                   {errorMessage.address && (
                     <div className="text-red-500 text-sm mt-2 ml-5 ">{errorMessage.address}</div>
                       )}
                </div>
              </div>
            </div>




            <div className="flex gap-8 mt-5">
              {/* Role */}
              <div>
                <h1 className=" text-sm mb-2">Role</h1>
                <Dropdown
                  placeholder="Select Role"
                  editable
                  style={{...dropdownStyle,  border: '1px solid #00426F',}}
                />
                 {errorMessage.role && (
                     <div className="text-red-500 text-sm mt-1">{errorMessage.role}</div>
                       )}
              </div>

              {/* Account Status */}

              <div className="flex flex-col items-start mt-1" style={{ marginLeft: '-10px' }}>
                <label className="text-sm  mb-1">Account Status</label>
                <Dropdown
                  placeholder="Select Status"
                  editable
                  style={{...dropdownStyle,  border: '1px solid #00426F',}}
                />
                 {errorMessage.accountStatus && (
                     <div className="text-red-500 text-sm mt-1">{errorMessage.accountStatus}</div>
                       )}
              </div>



              {/* Phone Number */}
              <div className="flex flex-col items-start mt-1" style={{ marginLeft: '-10px' }}>
                <label className="text-sm  mb-1">Phone</label>
                <InputText
                  style={{...dropdownStyle,  border: '1px solid #00426F',}}
                />
                 {errorMessage.phone && (
                     <div className="text-red-500 text-sm mt-1">{errorMessage.phone}</div>
                       )}
              </div>
            </div>
          </div>

         
                  <div className="flex justify-center ">
                    {/* Outer Container */}
                    <div
                      className="p-4 border rounded-lg"
                      style={{
                        backgroundColor: '#EDF3F9',
                        width: '890px',
                      }}
                    >
                      {/* Heading */}
                      <h2 className="text-sm  mb-2">Set Password</h2>
        
                      {/* Input Fields and Button */}
                      <div className="flex flex-wrap gap-4">
                        {/* New Password */}
                        <div className="flex-1 min-w-[200px]">
                          <InputText
                            placeholder="New Password"
                            className="w-full"
                            style={{...dropdownStyle,  border: '1px solid #00426F',}}
                          />
                           {errorMessage.newPassword && (
                     <div className="text-red-500 text-sm mt-1">{errorMessage.newPassword}</div>
                       )}
                        </div>
        
                        {/* Confirm Password */}
                        <div className="flex-1 min-w-[200px]">
                          <InputText
                            placeholder="Confirm New Password"
                            className="w-full"
                            style={{...dropdownStyle,  border: '1px solid #00426F',}}
                          />
                           {errorMessage.confirmNewPassword && (
                     <div className="text-red-500 text-sm mt-1">{errorMessage.confirmNewPassword}</div>
                       )}
                        </div>
        
                        {/* Save Password Button */}
                        <div className="flex-1 flex">
                          <Button
                            label="Save Password"
                            style={savePassword}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
        
        
          {/*Save button*/}
          <Button
            label="Save"
             style={{...saveButtonStyle , marginLeft: "30px"}}
             onClick={handleSave}
          />

          {/*Back button*/}
          <Button
            label="Back"
            style={backButtonStyle}
            onClick={() => {
              setVisible(false)
            }}
          />

          {/*Delete user button */}
          <Button
            label="Delete Agent"
             style={{...deleteButtonStyle , marginLeft: "550px"}}
          />
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
            strokeWidth="4"
          />
          )}

    </>
  )
}

export default AddAgent




