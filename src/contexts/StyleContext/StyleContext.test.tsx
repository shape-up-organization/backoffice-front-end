import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it, vi } from 'vitest'

import { tests } from 'utils/helpers/tests'

import { StyleProvider } from './StyleContext'
import { Sample } from './StyleContext.stories'

describe('Contexts/StyleContext', () => {
  beforeAll(() => {
    vi.mock('next/font/local', () => ({
      __esModule: true,
      default: vi.fn().mockReturnValue({
        style: {
          fontFamily: 'Ubuntu',
        },
      }),
    }))
  })

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
