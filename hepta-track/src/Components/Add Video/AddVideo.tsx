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
import { dialogStyle, dropdownStyle, inputTextAreaStyle, inputTextStyle, dialogblur, saveButtonStyle, backButtonStyle, deleteButtonStyle } from '../Styles/styles'
import './AddVideo.css'

const AddVideo: React.FC<AddVideoProps> = ({ visible, setVisible }) => {
    const [videoName, setVideoName] = useState('')
    const [checked, setChecked] = useState(true)
    const [date, setDate] = useState<Date | null>(null)
    const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>({})
    const [isLoading, setIsLoading] = useState(false)
    const [videoVisible, setVideoVisible] = useState(false)
    const [videoRequestDtoList, setVideoRequestDtoList] = useState<any[]>([])
    const [hoveredIndex, setHoveredIndex] = useState<null | number>(null)
    const [videos, setVideos] = useState<string[]>([])
    const [status, setStatus] = useState("")
    const [detail, setDetail] = useState("")
    


    const dispatch = useDispatch()

    const open = useSelector((state: RootState) => state.user.isOpen)

    const handleToggleDrawer = () => {
        dispatch(setOpen(!open))
    }

   
    const validateForm = () => {
        let errors: { [key: string]: string } = {};

        if (!videoName) {
            errors.videoname = "Video name is required";
        }

      
        if (!date) {
            errors.date = "Date is required";
        }


        if (!status) {
            errors.status = "Status is required";
        }

        if (!detail) {
            errors.detail = "Detail is required";
        }

        if (!videos.length) {
            errors.videos = "Video is required";
        }

        setErrorMessage(errors);
        return Object.keys(errors).length === 0;
    };


    const handleSave = () => {
        const isValid = validateForm()
    }



    return (
        <>

            {visible && (
                <div
                      style={{...dialogblur , marginLeft: open ? "280px" : "110px",}}
                ></div>
            )}
            <div>
                <Dialog
                    modal={false}
                    visible={visible}
                    onHide={() => { }}
                    closable={false}
                    style={dialogStyle}
                   >

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
                                    style={inputTextStyle}
                                />
                                 {errorMessage.videoname && (
                                    <div className="text-red-500 text-sm mt-1">{errorMessage.videoname}</div>
                                )}
                            </div>
                        </div>

                        {/* Date*/}
                        <div className="flex flex-col mt-1" style={{ marginLeft: '20px' }}>
                            <label className="text-sm  mb-1">Date</label>
                            <Calendar
                                value={date}
                                onChange={(e) => setDate(e.value as Date)}
                                placeholder="Date"
                                style={inputTextStyle}
                                showIcon
                            />
                             {errorMessage.date && (
                                    <div className="text-red-500 text-sm mt-1">{errorMessage.date}</div>
                                )}
                            
                        </div>

                        {/* Status*/}

                        <div className="flex flex-col mt-1" style={{ marginLeft: '20px' }}>
                            <label className="text-sm mb-1">Status</label>
                            <Dropdown
                                placeholder="Select"
                                editable
                                style={dropdownStyle}
                                  />
                                   {errorMessage.status && (
                                    <div className="text-red-500 text-sm mt-1">{errorMessage.status}</div>
                                )}
                        </div>
                    </div>

                    {/* Detail */}
                    <div className='mt-5'>
                        <label className="text-sm">Detail</label>
                        <div className='mt-2'>

                            <InputTextarea
                              style={inputTextAreaStyle}
                            />
                             {errorMessage.detail && (
                                    <div className="text-red-500 text-sm mt-1">{errorMessage.detail}</div>
                                )}
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
                        setVideoVisible={setVideoVisible}
                        VideoRequestDtoList={videoRequestDtoList}
                        isLoading={isLoading}
                        images={videos}
                    />
                     {errorMessage.videos && (
                                    <div className="text-red-500 text-sm mt-1">{errorMessage.videos}</div>
                                )}



                    {/*Save button*/}
                    <Button
                        label="Save"
                        style={{...saveButtonStyle}}
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
                    <div className='mt-[-30px]'>
                        <Button
                            label="Delete"
                            style={deleteButtonStyle}
                        />
                    </div>
                </Dialog>
            </div>
        </>
    )
}

export default AddVideo

