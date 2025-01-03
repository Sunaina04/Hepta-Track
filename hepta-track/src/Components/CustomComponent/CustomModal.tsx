import React from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { CustomModalProps } from '../../Type/ComponentBasedTypes'

const CustomModal: React.FC<CustomModalProps> = ({
  buttonText,
  headerText,
  dialogProps,
  children,
  visible,
  onClick,
  onHide,
  buttonStyle,
  dialogStyle,
  icon,
  button,
}) => {
  return (
    <div className="card flex justify-content-center">
      {!button && <Button label={buttonText} icon={icon} onClick={onClick} style={buttonStyle} />}
      <Dialog
        header={headerText}
        headerStyle={{ cursor: 'context-menu' }}
        {...dialogProps}
        visible={visible}
        modal={false}
        onHide={onHide}
        closable={false}
        draggable={false}
        focusOnShow={false}
        style={{
                    ...dialogStyle, 
                    padding: '0px',
                  }}
        className="custom-modal">
        {children}
      </Dialog>
    </div>
  )
}

export default CustomModal
