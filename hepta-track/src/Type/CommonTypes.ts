import { ReactNode } from 'react'
import { UserData } from './ApiTypes'

export interface SidebarState {
  isOpen: boolean
}

export interface InitialState {
  token: string
  userData: UserData | null
  isOpen: boolean
  sidebar: SidebarState
  customerId: string
  customerName: string
}

export interface ButtonCompProps {
  onClick: () => void
  disabled?: boolean
  label: string
  style?: React.CSSProperties
  size?: 'small' | 'large'
  icon?: any
  color?: string
  children?: ReactNode
  text?: boolean
}
