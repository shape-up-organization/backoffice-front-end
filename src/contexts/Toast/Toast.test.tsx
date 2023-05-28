import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { Multiple, Sample } from './Toast.stories'

describe('Contexts/Toast', () => {
  it('should render toast on single button click', async () => {
    render(<Sample type="success" />)
    const successButton = screen.getByRole('button', { name: /TOAST/i })

    expect(successButton).toBeInTheDocument()
    userEvent.click(successButton)
    await waitFor(() =>
      expect(
        document.querySelector('.Toastify__toast-container')
      ).toBeInTheDocument()
    )
  })

  it('should render toast and fallbacks to inherit', async () => {
    render(<Sample type="default" />)
    const successButton = screen.getByRole('button', { name: /TOAST/i })

    expect(successButton).toBeInTheDocument()

    userEvent.click(successButton)
    await waitFor(() =>
      expect(
        document.querySelector('.Toastify__toast-container')
      ).toBeInTheDocument()
    )
    expect(successButton).toHaveClass('MuiButton-colorInherit')
  })

  it('should render toast on multiple button click', async () => {
    render(<Multiple />)
    const successButton = screen.getByRole('button', { name: /SUCCESS/i })
    userEvent.click(successButton)

    await waitFor(() =>
      expect(
        document.querySelector('.Toastify__toast-container')
      ).toBeInTheDocument()
    )
  })
})
