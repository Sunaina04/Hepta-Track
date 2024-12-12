import React, { useCallback, useEffect, useState } from 'react'
import { Button } from 'primereact/button'
import { Avatar } from 'primereact/avatar'
import { Dropdown } from 'primereact/dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { ErrorResponse } from '../../../Type/ApiTypes'
import { setCustomerId, setCustomerName, selectCustomerName } from '../../../Store/Slice/userSlice'
import HeaderProfile from './HeaderProfile'
import { HeaderProps } from '../../../Type/ComponentBasedTypes'

const Header: React.FC<HeaderProps> = ({ header, customer }) => {
  const userData = useSelector((state: any) => state.user?.userData)
  const role = userData?.role?.id
  const dispatch = useDispatch()
  const selectedCustomerName = useSelector(selectCustomerName)
  const [getCustomerOwnerData, setgetCustomerOwnerData] = useState<any[]>([])
  const imageData = userData?.imageDto?.imageData
  const UserName =
    userData && userData?.firstName && userData?.lastName
      ? userData?.firstName + ' ' + userData?.lastName
      : ''
  const imageUrl = imageData ? `data:image/jpeg;base64,${imageData}` : '/assets/images/user12.png'

  const handleCustomerIdSelection = (customerId: any) => {
    const firstName = customerId?.firstName || '-'
    const lastName = customerId?.lastName || '-'
    const firstLastName = `${firstName} ${lastName}`

    dispatch(setCustomerName(firstLastName))
    dispatch(setCustomerId(customerId?.id))
  }

  const handleQuickBookApi = () => {
    const token = sessionStorage.getItem('token')
    const quickBooksLoginUrl = `${process.env.REACT_APP_BASE_URL}api/v1/QBO/connectToQuickbooks?authToken=${token}`
    window.open(quickBooksLoginUrl, 'QuickBooksWindow', 'width=800,height=600,scrollbars=yes')
  }

  return (
    <div
      style={{
        background: '#FFFFFF',
        padding: '15px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem',
        marginLeft: '3rem',
        marginRight: '2rem',
        borderRadius: '0.5rem',
        fontSize: '18px',
        fontWeight: 500,
        textAlign: 'left',
        color: '#AEAEAE',
      }}>
      {header}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          minWidth: '300px',
          justifyContent: 'end',
        }}>
        {(role === 1 || role === 2 || role === 3) && (
          <>
            <button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                marginRight: '10px',
              }}
              onClick={handleQuickBookApi}>
              <img
                src="/assets/images/quickBook.png"
                alt="Button Icon"
                style={{ width: '150px', height: '35px' }}
              />
            </button>
          </>
        )}
        {role === 1 && (
          <>
            <Dropdown
              value={selectedCustomerName || '-'}
              onChange={(e) => {
                handleCustomerIdSelection(e.value)
              }}
              optionLabel="label"
              optionValue="value"
              placeholder="Select"
              options={getCustomerOwnerData}
              editable
              style={{
                width: '160px',
                height: '32px',
                minHeight: '32px',
                border: '1px solid gray',
                borderRadius: '0.5rem',
                color: 'black',
                marginRight: '40px',
              }}
            />
          </>
        )}
        {userData && (
          <>
            <Avatar image={imageUrl} shape="circle" />
            <span style={{ color: '#000000', fontSize: '16px', fontWeight: 400 }}>{UserName}</span>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
