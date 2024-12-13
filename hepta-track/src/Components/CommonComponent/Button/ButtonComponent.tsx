import { Button } from 'primereact/button'
import React, { ReactNode } from 'react'
import { ButtonCompProps } from '../../../Type/CommonTypes'

const ButtonComponent: React.FC<ButtonCompProps> = ({
  disabled,
  label,
  style,
  size,
  icon,
  color,
  children,
  onClick,
}) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <Button
        disabled={disabled}
        label={label}
        style={style}
        size={size}
        icon={icon}
        color={color}
        children={children}
        onClick={onClick}
      />
    </div>
  )
}

export default ButtonComponent
