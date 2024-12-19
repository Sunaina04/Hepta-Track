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

export interface AddUserProps {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export interface AddAgentProps {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export interface AddExpenseProps{
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export interface AddSubscriptionProps{
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export interface AddAdsProps{
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}


export interface AddVideoProps{
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}


export interface ShowImagesProps {
  handleNoteChange: (index: number, value: string) => void
  hoveredIndex: number | null
  handleRemoveImage: (index: number) => void
  setHoveredIndex: (index: number | null) => void
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setImageVisible: (visible: boolean) => void
  imageRequestDtoList: { note: string }[]
  isLoading: boolean
  images: string[]
  toastRef?: any
}

export interface ShowVideoProps {
  handleNoteChange: (index: number, value: string) => void
  hoveredIndex: number | null
  handleRemoveVideo: (index: number) => void
  setHoveredIndex: (index: number | null) => void
  handleVideoChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setVideoVisible: (visible: boolean) => void
  VideoRequestDtoList: { note: string }[]
  isLoading: boolean
  images: string[]
  toastRef?: any
}
