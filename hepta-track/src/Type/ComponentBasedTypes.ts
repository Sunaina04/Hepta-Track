import { ButtonProps } from 'primereact/button'
import { IconType } from 'primereact/utils'

export interface HeaderProps {
  header?: string
  customer?: boolean
}

export interface CustomModalProps {
  button?: boolean
  buttonText?: string
  headerText?: string
  icon?: IconType<ButtonProps> | undefined
  children?: React.ReactNode
  dialogProps?: {
    [key: string]: any
  }
  visible?: boolean
  onClick?: () => void
  onHide: () => void
  buttonStyle?: React.CSSProperties | undefined
  dialogStyle?: React.CSSProperties
  footerContent?: React.ReactNode
}
