import { cleanup, render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import { tests } from 'utils/helpers/tests'

import { Sample } from './FrontendContexts.stories'

describe('Contexts/FrontendContexts', () => {
  describe('Sample', () => {
    beforeEach(() => {
      render(<Sample />)
    })

    afterEach(() => {
      cleanup()
    })

    it('should not change theme if not wrapped by provider', () => {
      const switchButton = screen.getByRole('checkbox')
      const themeText = screen.getByText(/light/i)

      expect(switchButton).toBeInTheDocument()
      expect(themeText).toBeInTheDocument()

      expect(themeText).toHaveTextContent('light')
      switchButton.click()
      expect(themeText).toHaveTextContent('light')
    })

    it('should start with correct theme and change on clicking switch button', async () => {
      expect(screen.getByText(/light/i)).toHaveTextContent('light')
      screen.getByRole('checkbox').click()

      const body = document.querySelectorAll('body')[1]
      if (body) {
        expect(tests.getStyleProperty(body, 'flexDirection')).toStrictEqual(
          'column'
        )
      }

      await waitFor(() =>
        expect(
          document.querySelector('.Toastify__toast-container')
        ).toBeInTheDocument()
      )
    })
  })
})
