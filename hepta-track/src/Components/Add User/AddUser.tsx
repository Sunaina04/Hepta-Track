import React, { useState, useEffect, useCallback, useRef, useContext } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { IoIosAdd } from 'react-icons/io'
import { GrFormSubtract } from 'react-icons/gr'
import { FaFileUpload, FaLessThanEqual } from 'react-icons/fa'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'

import './AddUser.css'
import { AddUserProps } from '../../Type/ComponentBasedTypes'

const AddUser: React.FC<AddUserProps> = ({ visible, setVisible }) => {
  const [userName, setUserName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  return (
    <>
{visible && (
    <div
      style={{
        position: "fixed",
        marginLeft: '300px',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(5px)",
        zIndex: 100,
      }}
    ></div>
  )}


          <div>
      <Dialog
        modal= {false}
        visible={visible}
        style={{
          width: '90vh',
          backgroundColor: 'white',
          minWidth: '200px',
          height: '700px',
          minHeight: '260px',
          borderRadius: '1rem',
          fontWeight: '400',
          cursor: 'alias',
          padding: '2.5rem',
        }}
        onHide={() => {
          if (!visible) return
          setVisible(false)
        }}>

        <h1 className="font-bold text-2xl">Edit/Add User</h1>

        <div className="flex mt-4">
  {/* User Name */}
  <div>
          <div>
            <span className="text-sm">
              <div className="flex gap-1">
                User Name
              </div>
            </span>
            <div className="mt-2"></div>
    <InputText
      style={{
        width: '270px',
        height: '32px',
        border: '1px solid #D5E1EA',
        borderRadius: '0.50rem',
        fontSize: '0.8rem',
        paddingLeft: '0.5rem',
        
      }}
    />
    </div>
  </div>

 {/* Phone Number */}
<div className="flex flex-col items-start mt-1" style={{ marginLeft: '20px' }}>
  <label className="text-sm  mb-1">Phone</label>
  <InputText
    style={{
      width: '270px',
      height: '32px',
      border: '1px solid #D5E1EA',
      borderRadius: '0.50rem',
      fontSize: '0.8rem',
      paddingLeft: '0.5rem',
    }}
  />
</div>


  

  {/* Email */}
 
<div className="flex flex-col items-start mt-1" style={{ marginLeft: '20px' }}>
  <label className="text-sm mb-1">Email Address</label>
  <InputText
    style={{
      width: '270px',
      height: '32px',
      border: '1px solid #D5E1EA',
      borderRadius: '0.50rem',
      fontSize: '0.8rem',
      paddingLeft: '0.5rem',
    }}
  />
</div>
</div>

 

      

  {/* Adress */}
  <div className="flex gap-6 mt-6">
          <div>
           
              <div className="text-sm">
               Address
              </div>
            <div className="mt-1"></div>
          {/*Street*/}

          <InputText
            placeholder='Street/Building'
            //value={phone}
            //onChange={(e) => setPhone(e.target.value)}
            style={{
              width: '200px',
              height: '32px',
              border: '1px solid #D5E1EA',
              borderRadius: '0.50rem',
              fontSize: '0.8rem',
              paddingLeft: '0.5rem',
            }}
          />

          {/*Apt/suite*/}
          <InputText
            placeholder='Apt/Suite'
            //value={phone}
            //onChange={(e) => setPhone(e.target.value)}
            style={{
              width: '200px',
              height: '32px',
              border: '1px solid #D5E1EA',
              borderRadius: '0.50rem',
              fontSize: '0.8rem',
              paddingLeft: '0.5rem',
              marginLeft: "15px"
            }}
          />


              {/*country*/}

          <Dropdown
            placeholder="Country"
            editable
            style={{
              width: '200px',
              height: '32px',
              border: '1px solid #D5E1EA',
              borderRadius: '0.50rem',
              fontSize: '0.8rem',
              paddingLeft: '0.5rem',
              marginLeft: "15px"
            }}
          />



              {/*State*/}

          <Dropdown
            placeholder="State"
            editable
            style={{
              width: '200px',
              height: '32px',
              border: '1px solid #D5E1EA',
              borderRadius: '0.50rem',
              fontSize: '0.8rem',
              paddingLeft: '0.5rem',
              marginLeft: "19px"
            }}
          />


          {/*ZipCode*/}
        <div className='mt-3'>
          <InputText
            placeholder='Zip Code'
            //value={phone}
            //onChange={(e) => setPhone(e.target.value)}
            style={{
              width: '200px',
              height: '32px',
              border: '1px solid #D5E1EA',
              borderRadius: '0.50rem',
              fontSize: '0.8rem',
              paddingLeft: '0.5rem',
            }}
          />
          </div>
        </div>
</div>
       

<div className="flex gap-8 mt-5">
  {/* Role */}
  <div>
    <h1 className="font-medium text-sm text-[#000000] mb-2">Role</h1>
    <Dropdown
      placeholder="Select Role"
      editable
      style={{
        width: '270px',
        height: '32px',
        border: '1px solid #D5E1EA',
        borderRadius: '0.50rem',
        fontSize: '0.8rem',
        paddingLeft: '0.5rem',
      }}
    />
  </div>

  {/* Account Status */}
  
<div className="flex flex-col items-start mt-1" style={{ marginLeft: '-10px' }}>
  <label className="text-sm  mb-1">Account Status</label>
  <Dropdown
      placeholder="Select Status"
      editable
      style={{
        width: '270px',
        height: '32px',
        border: '1px solid #D5E1EA',
        borderRadius: '0.50rem',
        fontSize: '0.8rem',
        paddingLeft: '0.5rem',
      }}
  />
</div>

 
 
 {/* Phone Number */}
<div className="flex flex-col items-start mt-1" style={{ marginLeft: '-10px' }}>
  <label className="text-sm  mb-1">Phone</label>
  <InputText
    style={{
      width: '265px',
      height: '32px',
      border: '1px solid #D5E1EA',
      borderRadius: '0.50rem',
      fontSize: '0.8rem',
      paddingLeft: '0.5rem',
    }}
  />
</div> 
</div>


        {/* Set Password */}
        <div className="  mt-6  ">
            {/* Container for inputs and button */}

            <div
              className="  flex  p-2 border rounded-lg"
              style={{
                backgroundColor: '#DCEEFB',
                width: '880px',
                height: '120px',
              }}>
              {/* New password */}
              <div className="mb-4">
              <div className='text-sm  mb-1'>Set password</div>
                <InputText
                  className="mt-2"
                  //value={phone}
                  placeholder="New Password"
                  //onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '270px',
                    height: '32px',
                    border: '1px solid #D5E1EA',
                    borderRadius: '0.50rem',
                    fontSize: '0.8rem',
                    paddingLeft: '0.5rem',
                  }}
                />
              </div>

              {/* Confirm New Password */}
              <div>
                <InputText
                  //value={phone}
                  placeholder="Confirm New Password"
                  //onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '270px',
                    height: '32px',
                    border: '1px solid #D5E1EA',
                    borderRadius: '0.50rem',
                    fontSize: '0.8rem',
                    paddingLeft: '0.5rem',
                    marginLeft: "20px",
                    marginTop: "32px"
                  }}
                />
              </div>

 <div>
              {/* Save Password */}
              <Button
              label="Save Password"
              style={{
                backgroundColor: 'black',
                borderRadius: '0.50rem',
                color: 'white',
                border: 'none',
                width: '270px',
                height: '32px',
                marginLeft: "20px",
                marginTop: '32px'
                
              }}
            />

</div>
          </div>
        </div>

          

          {/*Save button*/}
          <Button
            label="Save"
            style={{
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              width: '89px',
              height: '42px',
              marginTop: '40px',
              borderRadius: '0.50rem',
            }}
          />

          {/*Back button*/}
          <Button
            label="Back"
            style={{
              width: '89px',
              height: '42px',
              backgroundColor: 'white',
              boxShadow: 'none',
              color: 'Black',
              borderRadius: '0.50rem',
              marginTop: '10px',
              marginLeft: '30px',
              border: '1px solid black',
            }}
            onClick={() => {
              setVisible(false)
            }}
          />

          {/*Delete user button */}
          <Button
            label="Delete User"
            style={{
              width: '100px',
              height: '42px',
              backgroundColor: 'red',
              boxShadow: 'none',
              color: 'white',
              borderRadius: '0.50rem',
              marginLeft: '500px',
            }}
          />
        </Dialog>
      </div>
      

      
    </>
  )
}

export default AddUser
