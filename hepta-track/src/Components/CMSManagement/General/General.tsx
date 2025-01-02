import { useMemo } from 'react'
import { columnStyle } from '../../Utils/Style'
import { ActionButtonColumnProps } from '../../../Type/Components/TableTypes'
import Header from '../../Sidebar/LayoutComponents/Header'
import DataTableComponent from '../../CommonComponent/Table/DataTableComponent'
import { subscriptionData } from '../../Utils/DummyData'
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { IoIosAdd } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { GrFormSubtract } from 'react-icons/gr'
import { FaFileUpload, FaLessThanEqual } from 'react-icons/fa'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { setOpen } from '../../../Store/Slice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../Store/Store'
import { RadioButton } from 'primereact/radiobutton'
import { FileUpload } from 'primereact/fileupload'
import { Tag } from 'primereact/tag'
import UploadImages from '../../CommonComponent/Upload images/UploadImages'
import { InputTextarea } from 'primereact/inputtextarea'
import { Calendar } from 'primereact/calendar'
import { backButtonStyle, deleteButtonStyle, dialogblur, dialogStyle, dropdownStyle, inputTextAreaStyle, inputTextStyle, saveButtonStyle } from '../../Styles/styles'

import { ProgressSpinner } from 'primereact/progressspinner'
import DataTableButton from '../../CommonComponent/Table/DataTableButton'

const General = () => {


  const [status, setStatus] = useState("")
  const [detail, setDetail] = useState("")
  const dispatch = useDispatch()
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>({})
  const [imageVisible, setImageVisible] = useState(false)
  const [imageRequestDtoList, setImageRequestDtoList] = useState<any[]>([])
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null)
  const [images, setImages] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [theme,setTheme] = useState("")

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);



  const generalColumns = useMemo(
    () => [
      {
        id: 'General',
        label: 'General',
        style: columnStyle,
      },
    ],
    // [allowExpansion],
    [],
  )
 
  const colorPairs = [
    { color1: '#2196f3', name1: 'Blue', color2: '#1976d2', name2: 'Blue Focus' },
    { color1: '#e91e63', name1: 'Magenta', color2: '#c2185b', name2: 'Magenta Focus' },
    { color1: '#ff9800', name1: 'Orange', color2: '#f57c00', name2: 'Orange Focus' },
    { color1: '#4caf50', name1: 'Green', color2: '#388e3c', name2: 'Green Focus' },
    { color1: '#f44336', name1: 'Red', color2: '#d32f2f', name2: 'Red Focus' },
    { color1: '#303f9f', name1: 'Dark Blue', color2: '#283593', name2: 'Dark Blue Focus' },
  ];
  

  return (
    <>
      <Header header="CMS Management" />

      <div
        className={`bg-#00426F  mt-10  ml-[48px] mr-[32px] table-container flex flex-col rounded-t-lg`}>
        <div className="flex-grow overflow-auto h-[610px] rounded-b-[10px] border-[1px] border-[#D5E1EA]">
          <DataTableComponent
            tableStyle={{
              fontSize: '12px',
              color: '#000000',
              fontWeight: 500,
              backgroundColor: '#FFFFFF',
           
            }}
            columns={generalColumns}
          />

          {/* Form Section */}
          <div className="flex flex-wrap p-6">
          {/* Left Section */}
          <div className="flex flex-col w-2/3 gap-5">
            <div className="flex ">
              {/* Name Field */}
              <div className="flex-1">
                <label className="text-sm mb-1 block">Name</label>
                <InputText style={{...inputTextStyle, width: "103%"}} />
              </div>

              {/* Phone Field */}
              <div className="flex-1  ml-[20px] ">
                <label className="text-sm mb-1 block  ml-[20px]">Phone No.</label>
                <InputText style={{...inputTextStyle, width: "103%" , marginLeft: "20px"}} />
              </div>
            </div>

            {/* Detail Field */}
            <div>
              <label className=" text-sm mb-1 block">Detail</label>
              <InputTextarea placeholder="Type here" style={{...inputTextAreaStyle , width: "104%" }} />
            </div>
          </div>
         

          {/*Upload Images */}
       <div className='ml-[65px]'>
       <label className="text-sm mb-1 block ">Logo</label>
            <UploadImages 
              handleNoteChange={() => {}}
              hoveredIndex={hoveredIndex}
              handleRemoveImage={() => {}}
              setHoveredIndex={setHoveredIndex}
              handleImageChange={() => {}}
              setImageVisible={setImageVisible}
              imageRequestDtoList={imageRequestDtoList}
              isLoading={isLoading}
              images={images}   
              customStyle={{ width: '400px' , height: "184px" , marginTop: "0px" , borderRadius: "10px"}} 
            />
             </div>
           </div>



 {/*Theme  */}
           <label className="text-sm mb-1 block ml-6">Theme Colour</label>
           <div className="flex flex-wrap gap-11 ml-6">
      {colorPairs.map((pair, index) => (
        <div
          key={index}
          className="p-1 border rounded-lg mt-4"
          style={{ width: '200px', textAlign: 'center' }}
        >
          {/* Color boxes side by side */}
          <div className="flex justify-center gap-2">
            {/* Color 1 and Name */}
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-14 cursor-pointer rounded"
                style={{ backgroundColor: pair.color1 }}
                onClick={() => setTheme(pair.color1)}
              />
              <p className="mt-1 text-sm">{pair.name1}</p>
            </div>
            {/* Color 2 and Name */}
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-14 cursor-pointer rounded"
                style={{ backgroundColor: pair.color2 }}
                onClick={() => setTheme(pair.color2)}
              />
              <p className="mt-1 text-sm">{pair.name2}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

                    {/*Save button*/}
                    <Button
                        label="Save"
                        style={{...saveButtonStyle , marginLeft: "30px"}}
                        //onClick={}
                    />
        </div>


{isLoading && (
             <ProgressSpinner
             style={{
               position: 'absolute',
               top: '60%',
               left: '50%',
               transform: 'translate(-50%, -50%)',
               width: '50px',
               height: '50px',
             }}
             strokeWidth="4"
           />
          )}
      </div>
    </>
  )
}

export default General