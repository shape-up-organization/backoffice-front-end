import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { tests } from 'utils/helpers/tests'

import { StyleProvider } from './StyleContext'
import { Sample } from './StyleContext.stories'

describe('Contexts/StyleContext', () => {
  it('should not change theme if not wrapped by provider', () => {
    render(<Sample />)

    const switchButton = screen.getByRole('checkbox')
    const themeText = screen.getByText(/light/i)

    expect(switchButton).toBeInTheDocument()
    expect(themeText).toBeInTheDocument()

    expect(themeText).toHaveTextContent('light')
    switchButton.click()
    expect(themeText).toHaveTextContent('light')
  })

  it('should start with correct theme and change on clicking switch button', () => {
    render(
      <StyleProvider>
        <Sample />
      </StyleProvider>
    )

    const switchButton = screen.getByRole('checkbox')
    const themeText = screen.getByText(/light/i)

    expect(switchButton).toBeInTheDocument()
    expect(themeText).toBeInTheDocument()

    expect(themeText).toHaveTextContent('light')
    switchButton.click()
    expect(themeText).toHaveTextContent('dark')
    switchButton.click()
    expect(themeText).toHaveTextContent('light')

    const body = document.querySelectorAll('body')[1]
    if (body) {
      expect(tests.getStyleProperty(body, 'flexDirection')).toStrictEqual(
        'column'
      )
    }
  })
})
