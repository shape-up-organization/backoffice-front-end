import { FC } from 'react'
import { ToastContainer } from 'react-toastify'

import { ubuntu } from 'contexts/StyleContext/theme'
import './styles.scss'

const AUTO_CLOSE = 5000 * 1 // 5 seconds

const Toast: FC = () => (
  <ToastContainer
    autoClose={AUTO_CLOSE}
    closeOnClick
    draggable
    hideProgressBar={false}
    limit={1}
    newestOnTop={false}
    position="bottom-left"
    rtl={false}
    theme="colored"
    style={{
      fontFamily: ubuntu.style.fontFamily,
    }}
  />
)

export { Toast }
