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
import { InputTextarea } from 'primereact/inputtextarea'
import { dialogStyle, dropdownStyle, inputTextAreaStyle, inputTextStyle , dialogblur, saveButtonStyle, backButtonStyle, deleteButtonStyle} from '../Styles/styles'
import './AddExpense.css'

const AddExpense: React.FC<AddExpenseProps> = ({ visible, setVisible }) => {
    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [checked, setChecked] = useState(true)
    const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>({})
    const [expenseType,setExpenseType] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")
    const [paymentType,setPaymentType] = useState("")
    const [fatherName,setFatherName] = useState("")

    const dispatch = useDispatch()
    const open = useSelector((state: RootState) => state.user.isOpen)

    const handleToggleDrawer = () => {
        dispatch(setOpen(!open))
    }



  const validateForm = () => {
    let errors: { [key: string]: string } = {};


    if (!expenseType) {
      errors.expenseType = "Expense Type is required"
    }

    if (!price) {
        errors.price = "Price is required"
    }
     
    if (!description) {
        errors.description = "Description is required"
    }

    if( !paymentType) {
        errors.paymentType = "Payment type is required"
    }

    if(!fatherName) {
        errors.fathername = "Father name is required"
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
                    style={{
                        ...dialogStyle,
                    }}
                >

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
                                    style={dropdownStyle}
                                />
                                {errorMessage.expenseType && (
                     <div className="text-red-500 text-sm mt-1">{errorMessage.expenseType}</div>
                       )}
                            </div>
                        </div>

                        {/* Enter Price */}
                        <div className="flex flex-col mt-1" style={{ marginLeft: '20px' }}>
                            <label className="text-sm  mb-1">Enter Price</label>
                            <InputText
                                style={inputTextStyle}
                            />
                            {errorMessage.price && (
                     <div className="text-red-500 text-sm mt-1">{errorMessage.price}</div>
                       )}
                        </div>

                        {/* Split Expense type*/}

                        <div className="flex flex-col  mt-1" style={{ marginLeft: '20px' }}>
                            <label className="text-sm mb-1">Select Expense type</label>
                            <InputText
                                style={inputTextStyle}
                            />
                            {errorMessage.expenseType && (
                     <div className="text-red-500 text-sm mt-1">{errorMessage.expenseType}</div>
                       )}
                        </div>
                    </div>

                    {/* Description */}

                    <div className="text-sm mt-8">Description</div>
                    <InputTextarea
                        style={inputTextAreaStyle}
                    />
                    {errorMessage.description && (
                     <div className="text-red-500 text-sm mt-1">{errorMessage.description}</div>
                       )}


 
<div className="flex items-center gap-6 mt-4">
    {/* Radio Buttons */}
    <div className="flex items-center gap-4">
        <div className="flex items-center">
            <RadioButton
                checked={checked}
                variant="filled"
                style={{ accentColor: '#00B300' }}
            />
            <label className="text-[#32645F] font-bold ml-2">Given</label>
        </div>
        <div className="flex items-center">
            <RadioButton
                style={{ accentColor: "#00B300" }}
            />
            <label className="text-[#32645F] font-bold ml-2">Taken</label>
        </div>
    </div>

    {/* Dropdown */}
    <div className="flex flex-col ml-32 ">
        <label className="text-sm mb-1">Father Name</label>
        <Dropdown
            placeholder="Select"
            editable
            style={dropdownStyle}
        />
        {errorMessage.fathername && (
            <div className="text-red-500 text-sm mt-2">{errorMessage.fathername}</div>
        )}
    </div>

    {/* OR */}
    <div className="text-sm font-medium">or</div>

    {/* Add New Button */}
    <Button
        label="Add New"
        style={{
            backgroundColor: '#082825',
            borderRadius: '0.50rem',
            color: 'white',
            border: '#00426F',
            width: '100px',
            height: '32px',
        }}
    />
</div>

{/* Error Message for Radio Buttons */}
{errorMessage.paymentType && (
    <div className="text-red-500 text-sm -mt-5">{errorMessage.paymentType}</div>
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

export default AddExpense
