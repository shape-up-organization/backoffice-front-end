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
    limit={2}
    newestOnTop={false}
    pauseOnFocusLoss={false}
    pauseOnHover={false}
    position="bottom-left"
    rtl={false}
    style={{
      fontFamily: ubuntu.style.fontFamily,
    }}
    theme="colored"
  />
)

export { Toast }
