import { ToastOptions, toast } from 'react-toastify'

export type ToastType = 'default' | 'error' | 'info' | 'success' | 'warning'

export type HandleToastArgs = {
  message?: string
  type?: ToastType
  options?: ToastOptions
}

const useToast = () => {
  const handleToast = ({ message, type, options }: HandleToastArgs) =>
    toast(message, {
      ...options,
      type: type || 'default',
    })

  return { handleToast }
}

export default useToast
