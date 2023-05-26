import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { TooltipButton } from './TooltipButton'

describe('TooltipButton', () => {
  it('should renders properly', () => {
    render(<TooltipButton />)
    expect(screen.getByRole('button')).toBeDefined()
  })
})
