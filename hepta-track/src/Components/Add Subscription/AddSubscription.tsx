import React, { useState, useEffect, useCallback, useRef, useContext } from 'react'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
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
import { AddSubscriptionProps } from '../../Type/ComponentBasedTypes'
import { RadioButton } from 'primereact/radiobutton'
import { dialogStyle, dropdownStyle, inputTextAreaStyle, inputTextStyle, dialogblur, saveButtonStyle, backButtonStyle, deleteButtonStyle } from '../Utils/Style'
import './AddSubscription.css'
import { ProgressSpinner } from 'primereact/progressspinner'

const AddSubscription: React.FC<AddSubscriptionProps> = ({ visible, setVisible }) => {
    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [checked, setChecked] = useState(true)
    const [subscriptionName, setSubscriptionName] = useState("")
    const [amount, setAmount] = useState("")
    const [status, setStatus] = useState("")
    const [detail, setDetail] = useState("")
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


    if (!subscriptionName) {
      errors.subscriptionName = "Subscription Name is required"
    }

    if (!amount) {
        errors.amount = "Amount is required"
    }
     
    if (!status) {
        errors.status = "Status is required"
    }

    if( !detail) {
        errors.detail = "Detail is required"
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
                                    style={inputTextStyle}
                                />
                                 {errorMessage.subscriptionName && (
                     <div className="text-red-500 text-sm mt-1">{errorMessage.subscriptionName}</div>
                       )}
                            </div>
                        </div>

                        {/* Amount*/}
                        <div className="flex flex-col mt-1" style={{ marginLeft: '20px' }}>
                            <label className="text-sm  mb-1">Amount</label>
                            <InputText
                                style={inputTextStyle}
                            />
                             {errorMessage.amount && (
                     <div className="text-red-500 text-sm mt-1">{errorMessage.amount}</div>
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
                    <div className="text-sm mt-8 mb-1">Detail</div>
                    <InputTextarea
                        style={inputTextAreaStyle}
                    />
                     {errorMessage.detail && (
                     <div className="text-red-500 text-sm mt-1">{errorMessage.detail}</div>
                       )}


                    {/*Save button*/}
                    <div className='flex flex-grow '>
                        <Button
                            label="Save"
                            style={{ ...saveButtonStyle }}
                            onClick={handleSave}
                        />

                        {/*Back button*/}
                        <Button
                            label="Back"
                            style={{ ...backButtonStyle, marginTop: "60px" }}
                            onClick={() => {
                                setVisible(false)
                            }}
                        />

                        {/*Delete user button */}

                        <Button
                            label="Delete"
                            style={{ ...deleteButtonStyle, marginTop: "60px", marginLeft: "550px" }}
                        />

                    </div>
               
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

export default AddSubscription
