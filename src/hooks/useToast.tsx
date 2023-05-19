import { ToastOptions, toast } from 'react-toastify'

declare type ToastType = 'success' | 'error' | 'warn' | 'info'

const useToast = () => {
  const handleToast = (
    message: string,
    type: ToastType,
    options?: ToastOptions
  ) => {
    toast[type](message, options)
  }

  return { handleToast }
}

export default useToast
