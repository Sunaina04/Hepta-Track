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
import { AddAdsProps } from '../../Type/ComponentBasedTypes'
import { RadioButton } from 'primereact/radiobutton'
import { FileUpload } from 'primereact/fileupload'

const AddAds: React.FC<AddAdsProps> = ({ visible, setVisible }) => {
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
                        height: '500px',
                        minHeight: '260px',
                        borderRadius: '1rem',
                        fontWeight: '400',
                        cursor: 'alias',
                        marginLeft: '200px',
                        padding: '2.5rem'
                    }}>


                    <h1 className="font-bold text-2xl"> Edit/Create<IoClose className='ml-[830px] -mt-7' size={35} color="#000000" onClick={() => setVisible(false)} /></h1>

                    <div className="flex mt-4">
                        {/* Subscription Name*/}
                        <div>
                            <div>
                                <span className="text-sm">
                                    <div className="flex gap-1">
                                        Subscription Name
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
                                        outline: "none"
                                    }}
                                />
                            </div>
                        </div>

                        {/* Amount*/}
                        <div className="flex flex-col mt-1" style={{ marginLeft: '20px' }}>
                            <label className="text-sm  mb-1">Amount</label>
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

                        {/* Status*/}

                        <div className="flex flex-col  mt-1" style={{ marginLeft: '20px' }}>
                            <label className="text-sm mb-1">Status</label>
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

                    {/* Detail */}

                    <div className='mt-8'>
                        <label className="text-sm mb-1">Detail</label>
                        <InputText
                            style={{
                                width: '850px',
                                height: '100px',
                                border: '1px solid #D5E1EA',
                                borderRadius: '0.50rem',
                                fontSize: '0.8rem',
                                paddingLeft: '0.5rem',
                                outline: "none",
                                marginTop: "5px"
                            }}
                        />
                    </div>


                    {/*File upload */}


                    <FileUpload
                        //ref={fileUploadRef} 
                        // name="demo[]" 
                         url="/api/upload" 
                         multiple accept="image/*"
                        //  maxFileSize={1000000}
                        // onUpload={onTemplateUpload}
                        // onSelect={onTemplateSelect}
                        // onError={onTemplateClear}
                        // onClear={onTemplateClear}
                        // headerTemplate={headerTemplate}
                        // itemTemplate={itemTemplate}
                        // emptyTemplate={emptyTemplate}
                        // chooseOptions={chooseOptions}
                        // uploadOptions={uploadOptions}
                        // cancelOptions={cancelOptions} 
                        />






                    {/*Save button*/}
                    <Button
                        label="Save"
                        style={{
                            backgroundColor: '#00B300',
                            color: 'white',
                            border: 'none',
                            width: '89px',
                            height: '42px',
                            marginTop: '60px',
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
                            label="Delete"
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

export default AddAds
