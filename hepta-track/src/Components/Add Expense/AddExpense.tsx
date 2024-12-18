import React, { useState, useEffect, useCallback, useRef, useContext } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { IoIosAdd } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { GrFormSubtract } from 'react-icons/gr'
import { FaFileUpload, FaLessThanEqual } from 'react-icons/fa'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { setOpen } from '../../Store/Slice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Store/Store'
import { AddExpenseProps } from '../../Type/ComponentBasedTypes'
import { RadioButton } from 'primereact/radiobutton'

const AddExpense: React.FC<AddExpenseProps> = ({ visible, setVisible }) => {
    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [checked, setChecked] = useState(true)
    const dispatch = useDispatch()

    const open = useSelector((state: RootState) => state.user.isOpen)

    const handleToggleDrawer = () => {
        dispatch(setOpen(!open))
    }

    return (
        <>

            {visible && (
                <div
                    style={{
                        position: "fixed",
                        marginLeft: open ? "280px" : "110px",
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
                    modal={false}
                    visible={visible}
                    onHide={() => { }}
                    closable={false}
                    style={{
                        width: '87vh',
                        backgroundColor: 'white',
                        minWidth: '200px',
                        height: '630px',
                        minHeight: '260px',
                        borderRadius: '1rem',
                        fontWeight: '400',
                        cursor: 'alias',
                        marginLeft: '200px',
                        padding: '2.5rem'
                    }}>


                    <h1 className="font-bold text-2xl"> Add New Expenses<IoClose className='ml-[830px] -mt-7' size={35} color="#000000" onClick={() => setVisible(false)} /></h1>

                    <div className="flex mt-4">
                        {/* Select Expense type */}
                        <div>
                            <div>
                                <span className="text-sm">
                                    <div className="flex gap-1">
                                        Select Expense type
                                    </div>
                                </span>
                                <div className="mt-2"></div>
                                <Dropdown
                                    placeholder="Select"
                                    editable
                                    style={{
                                        width: '270px',
                                        height: '32px',
                                        border: '1px solid #D5E1EA',
                                        borderRadius: '0.50rem',
                                        fontSize: '0.8rem',
                                        paddingLeft: '0.5rem',
                                        outline: "none"
                                    }}
                                />
                            </div>
                        </div>

                        {/* Enter Price */}
                        <div className="flex flex-col mt-1" style={{ marginLeft: '20px' }}>
                            <label className="text-sm  mb-1">Enter Price</label>
                            <InputText
                                style={{
                                    width: '270px',
                                    height: '32px',
                                    border: '1px solid #D5E1EA',
                                    borderRadius: '0.50rem',
                                    fontSize: '0.8rem',
                                    paddingLeft: '0.5rem',
                                    outline: "none"
                                }}
                            />
                        </div>

                        {/* Split Expense type*/}

                        <div className="flex flex-col  mt-1" style={{ marginLeft: '20px' }}>
                            <label className="text-sm mb-1">Select Expense type</label>
                            <InputText
                                style={{
                                    width: '270px',
                                    height: '32px',
                                    border: '1px solid #D5E1EA',
                                    borderRadius: '0.50rem',
                                    fontSize: '0.8rem',
                                    paddingLeft: '0.5rem',
                                    outline: "none"
                                }}
                            />
                        </div>
                    </div>

                    {/* Description */}

                    <div className='mt-8'>
                        <label className="text-sm mb-1">Description</label>
                        <InputText
                            style={{
                                width: '850px',
                                height: '150px',
                                border: '1px solid #D5E1EA',
                                borderRadius: '0.50rem',
                                fontSize: '0.8rem',
                                paddingLeft: '0.5rem',
                                outline: "none",
                                marginTop: "5px"
                            }}
                        />
                    </div>



                    {/*Select Payment type */}

                    <div className='text-sm mt-7'>Select Payment Type</div>
                    <div className="flex flex-wrap gap-32 mt-4">
                       <div className="flex align-items-center">
                            <RadioButton 
                            //</div> onChange={} 
                             checked={checked}
                            />
                         <label  className="text-[#32645F] font-bold ml-2">Given</label>
                        </div>

                        <div className="flex align-items-center">
                            <RadioButton  
                            //</div> onChange={} 
                            //checked={checked}
                            />
                         <label className=" text-[#32645F] font-bold ml-2">Taken</label>
                        </div>
                    </div>
 
                
                   {/* Farmer name*/}
                    
                   <div className="flex flex-col mt-[-60px]" style={{ marginLeft: '330px' }}>
                            <label className="text-sm mb-1">Father Name</label>
                            <Dropdown
                            placeholder="Select"
                                    editable
                                    style={{
                                        width: '270px',
                                        height: '32px',
                                        border: '1px solid #D5E1EA',
                                        borderRadius: '0.50rem',
                                        fontSize: '0.8rem',
                                        paddingLeft: '0.5rem',
                                        outline: "none"
                                    }}
                                />
                        </div>
                      
                      <div className='ml-[610px] mt-[-30px]'>or</div>
                                    
                                    {/* Add new */}
                                   <div className='-mt-7'>
                                    <Button
                                      label="Add New"
                                      style={{
                                        backgroundColor: '#082825',
                                        borderRadius: '0.50rem',
                                        color: 'white',
                                        border: '#00426F',
                                        width: '100px',
                                        height: '32px',
                                        marginLeft: "635px",
                                      }}
                                    />
                                    </div>
                  
                   
                     {/*Save button*/}
                            <Button
                              label="Save"
                              style={{
                                backgroundColor: '#00B300',
                                color: 'white',
                                border: 'none',
                                width: '89px',
                                height: '42px',
                                marginTop: '70px',
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
                            <div className='mt-[-30px]'>
                            <Button
                              label="Delete Agent"
                              style={{
                                width: '100px',
                                height: '42px',
                                backgroundColor: '#E14942',
                                boxShadow: 'none',
                                color: 'white',
                                borderRadius: '0.50rem',
                                marginLeft: '750px',
                              }}
                            />
                            </div>
                </Dialog>
            </div>

        </>
    )
}

export default AddExpense
