import { Button } from 'primereact/button'
import React, { useRef, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaFileUpload } from 'react-icons/fa'
import { Toast } from 'primereact/toast'
import { useDispatch } from 'react-redux'

const HeaderUploadImage: React.FC<any> = ({ isLoading, handleModalClose, customerId }) => {
  const [image, setImage] = useState<string>('')
  const toastRef = useRef<Toast>(null)
  const dispatch = useDispatch()

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const fileSizeInKB = file.size / 1024
      if (fileSizeInKB > 100) {
        toastRef.current?.show({
          severity: 'error',
          summary: 'Error',
          detail: 'File size exceeds 100KB. Please upload a smaller image.',
          life: 3000,
        })
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        let base64String = reader.result as string
        let onlyBase64 = base64String.replace(/^data:image\/\w+;base64,/, '')
        if (!onlyBase64.startsWith('/')) {
          onlyBase64 = '/' + onlyBase64
        }
        setImage(onlyBase64)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setImage('')
  }

  return (
    <div>
      <Toast ref={toastRef} />
      <div className={`ml-4 ${isLoading ? 'blurred' : ''}`} style={{ marginBottom: '60px' }}>
        <div className="flex justify-center text-center">
          <div className="mt-">
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{
                display: 'none',
              }}
            />
            <label
              htmlFor="file-input"
              style={{
                width: '300px',
                height: '40px',
                border: '2px solid #0098FF',
                borderRadius: '0.50rem',
                fontSize: '0.8rem',
                paddingLeft: '0.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
              <FaFileUpload
                style={{
                  fontSize: '29px',
                  color: '#0098FF',
                  marginLeft: '1rem',
                  marginTop: '1px',
                }}
              />
              <div className="border-r-2 border-sky-500 h-9 pl-3"></div>
              <span className="pl-10 mt-1">UPLOAD IMAGE</span>
            </label>
          </div>
        </div>

        {image && (
          <div style={{ marginTop: '40px' }}>
            <div className="flex gap-16 justify-center text-center">
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <AiOutlineDelete
                  onClick={handleRemoveImage}
                  style={{
                    position: 'absolute',
                    top: '165px',
                    right: '5px',
                    background: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    width: '28px',
                    height: '25px',
                    cursor: 'pointer',
                  }}
                />
                <img
                  src={`data:image/png;base64,${image}`}
                  alt="Uploaded"
                  className="w-24 h-24 rounded-full object-cover"
                  style={{
                    width: '300px',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '0.5rem',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeaderUploadImage
