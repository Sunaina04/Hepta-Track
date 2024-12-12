import React, { useState, useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCustomerId,
  setCustomerName,
  setOpen,
  setToken,
  setUserData,
} from '../../Store/Slice/userSlice'
import SidebarMenu from './LayoutComponents/SidebarMenu'
import { RootState } from '../../Store/Store'
import { ErrorResponse } from '../../Type/ApiTypes'
import { primary, secondary } from '../../Theme/ThemeColos'

const SidebarLayout = () => {
  const dispatch = useDispatch()
  const open = useSelector((state: RootState) => state.user.isOpen)
  const menuItems = SidebarMenu()
  const location = useLocation()

  const [selectedItem, setSelectedItem] = useState<string>(menuItems[0]?.link || '')

  useEffect(() => {
    // Set the selected item based on the current location
    setSelectedItem(location.pathname)
  }, [location])

  const handleToggleDrawer = () => {
    dispatch(setOpen(!open))
  }

  const handleLogout = async () => {
    try {
      dispatch(setToken(''))
      dispatch(setCustomerId(''))
      dispatch(setCustomerName(''))
      dispatch(
        setUserData({
          id: '',
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          creationDate: '',
          lastModifiedDate: '',
          phoneNumber: '',
        }),
      )
    } catch (error) {
      const { message } = error as ErrorResponse
      console.error('Error occurred while fetching customer data:', message)
    }
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ display: 'flex', maxHeight: '100vh', overflowY: 'auto' }}>
        <button
          onClick={handleToggleDrawer}
          style={{
            height: '30px',
            width: '30px',
            minWidth: '5px',
            marginLeft: open ? '15rem' : '4.8rem',
            marginTop: '3rem',
            display: 'inline-block',
            background: open ? primary.white : secondary[400],
            position: 'absolute',
            zIndex: 999,
            borderRadius: '5px',
          }}>
          <img
            src={open ? '/assets/icons/left.svg' : '/assets/icons/right.svg'}
            alt={open ? 'ChevronLeft' : 'ChevronRight'}
            style={{ width: '25%', height: '100%', marginLeft: '10px' }}
          />
        </button>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: open ? '19rem' : '5rem',
            minWidth: open ? '18rem' : '5rem',
            maxHeight: '100vh',
            background: primary.white,
            borderRight: 'none',
            transition: 'width 0.3s ease-in-out',
            position: 'relative',
            overflowY: 'auto',
            paddingBottom: '20px',
          }}>
          {/* Logo */}
          <div>
            <img
              src={open ? '/assets/images/Group 5.png' : '/assets/images/logo.png'}
              alt="Moorfind Logo"
              style={{
                width: open ? '45%' : '2rem',
                height: open ? 'auto' : '2.5rem',
                display: 'block',
                transition: 'width 0.3s ease-in-out',
                marginRight: open ? '15px' : '5px',
                marginLeft: open ? '30px' : '20px',
                marginTop: '50px',
                marginBottom: '50px',
              }}
            />
            {menuItems?.map((item, index) => (
              <React.Fragment key={index}>
                {item?.name && (
                  <NavLink
                    to={item?.link}
                    onClick={() => setSelectedItem(item.link)}
                    style={{
                      display: 'flex',
                      height: '42px',
                      width: open ? '16rem' : '3rem',
                      minWidth: open ? '16rem' : '3rem',
                      marginLeft: open ? '14px' : '10px',
                      marginRight: open ? '14px' : '10px',
                      background: selectedItem === item.link ? secondary[400] : '',
                      borderRadius: '6px',
                      flexDirection: 'row',
                      alignItems: 'center',
                      position: 'relative',
                    }}>
                    <img
                      src={selectedItem === item.link ? item?.selectedIcon : item?.icon}
                      alt=""
                      width={24}
                      style={{
                        marginRight: open ? '12px' : '5px',
                        marginLeft: open ? '16px' : '14px',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        letterSpacing: '0.2px',
                        textAlign: 'left',
                        color: selectedItem === item.link ? '#FFFFFF' : '#000000',
                        display: open ? 'flex' : 'none',
                        flexGrow: 1,
                      }}>
                      {item?.name}
                    </span>
                  </NavLink>
                )}

                {/* Add spacer between items */}
                {index !== menuItems.length - 1 && <div style={{ height: '20px' }} />}
              </React.Fragment>
            ))}
          </div>

          {/* Logout Button */}
          <div
            style={{
              transition: 'width 0.3s ease-in-out',
              marginLeft: open ? '25px' : '6px',
            }}>
            <NavLink
              to={''}
              style={{
                display: 'flex',
                height: '30px',
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
              }}
              onClick={handleLogout}>
              <img
                src="/assets/icons/logout.png"
                alt="Logout"
                width={20}
                style={{
                  marginRight: open ? '12px' : '20px',
                  marginLeft: open ? '16px' : '20px',
                }}
              />
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  letterSpacing: '0.2px',
                  textAlign: 'left',
                  color: '#082825',
                  display: open ? 'flex' : 'none',
                }}>
                {'Logout'}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
      <div
        style={{
          flexGrow: 1,
          width: 'calc(100vw - 16rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          overflowY: 'auto',
          maxHeight: '100vh',
        }}>
        <Outlet />
      </div>
    </div>
  )
}

export default SidebarLayout
