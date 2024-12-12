import React from 'react'
import { Avatar } from 'primereact/avatar'
import { HeaderProps } from '../../../Type/ComponentBasedTypes'
import { greyShades, primary } from '../../../Theme/ThemeColos'

const Header: React.FC<HeaderProps> = ({ header }) => {
  return (
    <div
      style={{
        background: greyShades[600],
        padding: '15px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem',
        marginLeft: '3rem',
        marginRight: '2rem',
        borderRadius: '10px',
        border: `1px solid ${greyShades[500]} `,
        fontSize: '18px',
        fontWeight: 500,
        textAlign: 'left',
        color: primary.black,
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
        {/* {userData && ( */}
        <>
          <Avatar image={'/assets/images/user1.png'} shape="circle" />
          <span style={{ color: '#000000', fontSize: '16px', fontWeight: 400 }}>
            {'John Smith'}
          </span>
        </>
        {/* )} */}
      </div>
    </div>
  )
}

export default Header
