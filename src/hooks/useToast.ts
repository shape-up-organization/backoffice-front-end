import { ToastOptions, toast } from 'react-toastify'

export type ToastType = 'success' | 'error' | 'warn' | 'info'

export type HandleToastArgs = {
  message: string
  type?: ToastType
  options?: ToastOptions
}

const useToast = () => {
  const handleToast = ({ message, type, options }: HandleToastArgs) => {
    const showToast = type && type in toast ? toast[type] : toast
    showToast(message, options)
  }

  return { handleToast }
}

export default useToast
