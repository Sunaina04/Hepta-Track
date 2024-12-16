import React, { useState, useEffect, useCallback, useRef, useContext } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { IoIosAdd } from 'react-icons/io'
import { GrFormSubtract } from 'react-icons/gr'
import { FaFileUpload, FaLessThanEqual } from 'react-icons/fa'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'

import './AddUser.css'

const AddUser = () => {
  const [visible, setVisible] = useState(false)
  const [userName, setUserName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  return (
    <>
      <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
      <div className="card flex justify-content-center">
        <Dialog
          visible={visible}
          style={{
            width: '110vh',
            backgroundColor: '#FFFFFF',
            minWidth: '700px',
            height: '700px',
            minHeight: '260px',
            borderRadius: '1rem',
            fontWeight: '400',
            cursor: 'alias',
          }}
          onHide={() => {
            if (!visible) return
            setVisible(false)
          }}>
          <h1 className="font-bold text-2xl ">Edit/Add User</h1>
          <div>
            {/*User Name*/}
            <div className="mt-4">User Name</div>
            <div className="mt-3 card flex justify-content-center border">
              <InputText
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{
                  width: '230px',
                  height: '32px',
                  border: '1px solid #D5E1EA',
                  borderRadius: '0.50rem',
                  fontSize: '0.8rem',
                  paddingLeft: '0.5rem',
                }}
              />
            </div>

            {/*Phone Number*/}
            <div className=" ml-[260px] mt-[-34px] card flex justify-content-center border">
              <h1 className="mt-[-36px] mr-[-50px]">Phone</h1>
              <InputText
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: '230px',
                  height: '32px',
                  border: '1px solid #D5E1EA',
                  borderRadius: '0.50rem',
                  fontSize: '0.8rem',
                  paddingLeft: '0.5rem',
                }}
              />
            </div>

            {/*Email*/}

            <div className=" ml-[530px] mt-[-34px] card flex justify-content-center border">
              <h1 className="mt-[-36px] mr-[-50px]">Email</h1>
              <InputText
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: '230px',
                  height: '32px',
                  border: '1px solid #D5E1EA',
                  borderRadius: '0.50rem',
                  fontSize: '0.8rem',
                  paddingLeft: '0.5rem',
                }}
              />
            </div>
          </div>
          <div>
            <h1 className="mt-4">Adress</h1>
            <div>
              {/*Street*/}

              <div className="mt-3 card flex justify-content-center border">
                <InputText
                  value={userName}
                  placeholder="Street/Building"
                  onChange={(e) => setUserName(e.target.value)}
                  style={{
                    width: '230px',
                    height: '32px',
                    border: '1px solid #D5E1EA',
                    borderRadius: '0.50rem',
                    fontSize: '0.8rem',
                    paddingLeft: '0.5rem',
                  }}
                />
              </div>

              {/*Apt/suite*/}
              <div className=" ml-[260px] mt-[-34px] flex justify-content-center border">
                <InputText
                  value={userName}
                  placeholder="Apt/Suite"
                  onChange={(e) => setUserName(e.target.value)}
                  style={{
                    width: '230px',
                    height: '32px',
                    border: '1px solid #D5E1EA',
                    borderRadius: '0.50rem',
                    fontSize: '0.8rem',
                    paddingLeft: '0.5rem',
                  }}
                />
              </div>

              <div>
                {/*country*/}

                <div>
                  <div className="ml-[520px] mt-[-34px]">
                    <Dropdown
                      placeholder="Country"
                      editable
                      style={{
                        width: '230px',
                        height: '32px',
                        border: '1px solid #D5E1EA',
                        borderRadius: '0.50rem',
                        fontSize: '0.8rem',
                        paddingLeft: '0.5rem',
                      }}
                    />
                  </div>
                </div>

                {/*State*/}

                <div>
                  <div className="mt-[-32px] ml-[790px]">
                    <Dropdown
                      placeholder="State"
                      editable
                      style={{
                        width: '230px',
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

              {/*ZipCode*/}

              <div className=" mt-4 card flex justify-content-center border">
                <InputText
                  value={phone}
                  placeholder="Zip Code"
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '230px',
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

          {/*Role*/}

          <div>
            <h1 className="mt-6">Role</h1>
            <div>
              <div className="mt-3">
                <Dropdown
                  placeholder="Select Role"
                  editable
                  style={{
                    width: '230px',
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

          {/*Account Status*/}
          <h1 className="ml-[260px] mt-[-66px]">Account Status</h1>
          <div className="ml-[260px] mt-3">
            <Dropdown
              placeholder="Active"
              editable
              style={{
                width: '230px',
                height: '32px',
                border: '1px solid #D5E1EA',
                borderRadius: '0.50rem',
                fontSize: '0.8rem',
                paddingLeft: '0.5rem',
              }}
            />
          </div>

          {/*phone*/}

          <div className="ml-[530px] mt-[-64px]">Phone</div>
          <div className=" ml-[530px] mt-2 flex justify-content-center border">
            <InputText
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                width: '230px',
                height: '32px',
                border: '1px solid #D5E1EA',
                borderRadius: '0.50rem',
                fontSize: '0.8rem',
                paddingLeft: '0.5rem',
              }}
            />
          </div>

          {/* Set Password */}
          <div className="mt-4 ">
            {/* Container for inputs and button */}

            <div
              className="  flex flex-auto p-6 border rounded-lg gap-20"
              style={{
                backgroundColor: '#DCEEFB',
                width: '1090px',
                margin: '0 auto',
                height: '120px',
                marginLeft: '-1px',
              }}>
              <h3 className="-mt-3 -ml-4">Set Password</h3>
              {/* New password */}
              <div className=" -ml-[180px] mt-6 card flex justify-content-center">
                <InputText
                  value={phone}
                  placeholder="New Password"
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '230px',
                    height: '32px',
                    border: '1px solid #D5E1EA',
                    borderRadius: '0.50rem',
                    fontSize: '0.8rem',
                    paddingLeft: '0.5rem',
                  }}
                />
              </div>

              {/* Confirm New Password */}
              <div className=" ml-[-52px] mt-6 card flex justify-content-center">
                <InputText
                  value={phone}
                  placeholder="Confirm Password"
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '230px',
                    height: '32px',
                    border: '1px solid #D5E1EA',
                    borderRadius: '0.50rem',
                    fontSize: '0.8rem',
                    paddingLeft: '0.5rem',
                  }}
                />
              </div>

              {/* Save Password */}
              <Button
                label="Save Password"
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  border: 'none',
                  width: '200px',
                  height: '32px',
                  marginLeft: '-39px',
                  marginTop: '24px',
                }}
              />
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
            onClick={() => setVisible(false)}
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
              borderBlock: '5px',
              borderColor: 'black',
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
              marginTop: '10px',
              marginLeft: '700px',
            }}
          />
        </Dialog>
      </div>
    </>
  )
}

export default AddUser
