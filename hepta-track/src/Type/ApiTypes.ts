export interface UserData {
  id: string
  firstname: string
  lastname: string
  email: string
  password: string
  creationDate: string
  lastModifiedDate: string
  phoneNumber: string
}

export interface ErrorResponse {
  status: number
  message: string
  error: any
  data: {
    content: string
    message: string
    status: number
    error: any
  }
}
