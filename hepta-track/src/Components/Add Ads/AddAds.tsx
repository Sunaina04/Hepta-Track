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
import { Tag } from 'primereact/tag'
import UploadImages from '../CommonComponent/Upload images/UploadImages'
import { InputTextarea } from 'primereact/inputtextarea'
import { Calendar } from 'primereact/calendar'
import { backButtonStyle, deleteButtonStyle, dialogblur, dialogStyle, dropdownStyle, inputTextAreaStyle, inputTextStyle, saveButtonStyle, uploadImageStyle } from '../Styles/styles'
import './AddAds.css'
import { ProgressSpinner } from 'primereact/progressspinner'

const AddAds: React.FC<AddAdsProps> = ({ visible, setVisible }) => {
    const [adName, setAdName] = useState('')
    const [dateRange, setDateRange] = useState<Date[] | null>(null);
    const [status, setStatus] = useState("")
    const [detail, setDetail] = useState("")
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>({})
    const [imageVisible, setImageVisible] = useState(false)
    const [imageRequestDtoList, setImageRequestDtoList] = useState<any[]>([])
    const [hoveredIndex, setHoveredIndex] = useState<null | number>(null)
    const [images, setImages] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const open = useSelector((state: RootState) => state.user.isOpen)

    const handleToggleDrawer = () => {
        dispatch(setOpen(!open))
    }

    const validateForm = () => {
        let errors: { [key: string]: string } = {};

        if (!adName) {
            errors.adname = "Ad name is required";
        }

        if (!dateRange || dateRange.length !== 2) {
            errors.dateRange = "Date range is required";
        }

        if (!status) {
            errors.status = "Status is required";
        }

        if (!detail) {
            errors.detail = "Detail is required";
        }

        if (!images.length) {
            errors.images = "Image is required";
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
                    style={{ ...dialogblur, marginLeft: open ? "280px" : "110px", }}
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
                    <h1 className="font-bold text-2xl"> Add New Promotions<IoClose className='ml-[830px] -mt-7' size={35} color="#000000" onClick={() => setVisible(false)} /></h1>

                    <div className="flex mt-4">
                        {/* Ad Name*/}
                        <div>
                            <div>
                                <span className="text-sm">
                                    <div className="flex gap-1">
                                        Ad Name
                                    </div>
                                </span>
                                <div className="mt-2"></div>
                                <InputText
                                    style={inputTextStyle}
                                />
                                {errorMessage.adname && (
                                    <div className="text-red-500 text-sm mt-1">{errorMessage.adname}</div>
                                )}
                            </div>
                        </div>

                        {/* Date*/}
                        <div className="flex flex-col mt-1" style={{ marginLeft: '20px' }}>
                            <label className="text-sm  mb-1">Date</label>
                            <Calendar
                                showIcon={true}
                                value={dateRange}
                                onChange={(e) => setDateRange(e.value as Date[])}
                                selectionMode="range"
                                placeholder="From Date - To Date"
                                style={inputTextStyle}
                            />
                            {errorMessage.dateRange && (
                                <div className="text-red-500 text-sm mt-1">{errorMessage.dateRange}</div>
                            )}
                        </div>

                        {/* Status*/}

                        <div className="flex flex-col  mt-1" style={{ marginLeft: '20px' }}>
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
                    <UploadImages
                        handleNoteChange={() => { }}
                        hoveredIndex={hoveredIndex}
                        handleRemoveImage={() => { }}
                        setHoveredIndex={setHoveredIndex}
                        handleImageChange={() => { }
                        }
                        setImageVisible={setImageVisible}
                        imageRequestDtoList={imageRequestDtoList}
                        isLoading={isLoading}
                        images={images}
                        customStyle={{ width: '850px' }} 
                        
                    />
                    {errorMessage.images && (
                        <div className="text-red-500 text-sm mt-1">{errorMessage.images}</div>
                    )}


                    {/*Save button*/}
                    <Button
                        label="Save"
                        style={saveButtonStyle}
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

export default AddAds
