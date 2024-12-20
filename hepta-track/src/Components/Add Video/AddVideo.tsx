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
import { AddVideoProps } from '../../Type/ComponentBasedTypes'
import { RadioButton } from 'primereact/radiobutton'
import { FileUpload } from 'primereact/fileupload'
import { Tag } from 'primereact/tag'
import UploadVideo from '../CommonComponent/Video Upload/VideoUpload'
import { InputTextarea } from 'primereact/inputtextarea'
import { Calendar } from 'primereact/calendar'


const AddVideo: React.FC<AddVideoProps> = ({ visible, setVisible }) => {
    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [checked, setChecked] = useState(true)
    const [date, setDate] = useState<Date | null>(null)
    const dispatch = useDispatch()



    const [editMode, setEditMode] = useState<boolean>(
        //editModeWorkOrder ? editModeWorkOrder : false || editModeEstimate ? editModeEstimate : false,
    )
    const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>({})
    const [lastChangedField, setLastChangedField] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [approveModalOpen, setApproveModalOpen] = useState(false)
    const [denyModalOpen, setDenyModalOpen] = useState(false)
    const [imageVisible, setImageVisible] = useState(false)
    const [imageRequestDtoList, setImageRequestDtoList] = useState<any[]>([])
    const [statusChanged, setStatusChanged] = useState(
        // workOrderData?.inventoryResponseDtoList?.length > 0 &&
        //workOrderData?.workOrderStatusDto?.id === 10,
    )

    const [hoveredIndex, setHoveredIndex] = useState<null | number>(null)
    const [images, setImages] = useState<string[]>([])
    const [vendorId, setVendorId] = useState<any>()
    const [isDirty, setIsDirty] = useState<boolean>(false)




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
                        backgroundColor: 'white',
                        height: '700px',
                        minHeight: '260px',
                        borderRadius: '1rem',
                        fontWeight: '400',
                        cursor: 'alias',
                        marginLeft: '200px',
                        padding: '2.5rem',
                        overflow: "auto"
                    }}>


                    <h1 className="font-bold text-2xl"> Add/Edit Video<IoClose className='ml-[830px] -mt-7' size={35} color="#000000" onClick={() => setVisible(false)} /></h1>

                    <div className="flex mt-4">
                        {/*  Name*/}
                        <div>
                            <div>
                                <span className="text-sm">
                                    <div className="flex gap-1">
                                        Name
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

                        {/* Date*/}
                        <div className="flex flex-col mt-1" style={{ marginLeft: '20px' }}>
                            <label className="text-sm  mb-1">Date</label>
                            <Calendar
                                showIcon={true}
                                value={date}
                                onChange={(e) => setDate(e.value as Date)}
                                placeholder="Date"
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

                        <div className="flex flex-col mt-1" style={{ marginLeft: '20px' }}>
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
                    <div className='mt-5'>
                        <label className="text-sm">Detail</label>
                        <div className='mt-2'>

                            <InputTextarea
                                style={{
                                    width: '850px',
                                    height: '100px',
                                    border: '1px solid #D5E1EA',
                                    borderRadius: '0.50rem',
                                    fontSize: '0.8rem',
                                    paddingLeft: '0.5rem',
                                    outline: "none",
                                    marginTop: "7px",
                                    resize: "none"
                                }}
                            />
                        </div>
                    </div>

                    {/*File upload */}
                    <UploadVideo
                        handleNoteChange={() => { }}
                        hoveredIndex={hoveredIndex}
                        handleRemoveVideo={() => { }}
                        setHoveredIndex={setHoveredIndex}
                        handleVideoChange={() => { }
                        }
                        setVideoVisible={setImageVisible}
                        VideoRequestDtoList={imageRequestDtoList}
                        isLoading={isLoading}
                        images={images}

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

export default AddVideo