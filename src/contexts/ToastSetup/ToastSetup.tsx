import { ToastContainer } from 'react-toastify'
import './styles.css'

const AUTO_CLOSE = 5000 * 1 // 5 seconds

const ToastSetup = () => (
  <ToastContainer
    autoClose={AUTO_CLOSE}
    closeOnClick
    draggable
    hideProgressBar={false}
    newestOnTop={false}
    position="bottom-left"
    rtl={false}
    theme="colored"
  />
)

export { ToastSetup }
