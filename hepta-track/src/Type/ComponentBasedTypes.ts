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

export interface StatCardProps {
  percentage: string
  percentageColor: string
  icon: string
  value: string
  label: string
}

export interface inputHeader {
  header?: string
  iconStyle?: React.CSSProperties
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  headerStyle?: React.CSSProperties
  inputTextStyle?: React.CSSProperties
  value?: string | undefined
  borderBottom?: React.CSSProperties
}
