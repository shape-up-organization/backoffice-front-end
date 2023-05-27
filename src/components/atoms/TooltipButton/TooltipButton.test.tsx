import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Disabled, Sample } from './TooltipButton.stories'

describe('Atoms/TooltipButton', () => {
  it('should renders properly', () => {
    render(<Sample {...Sample.args} />)
    const button = screen.getByRole('button')

    expect(button.getAttribute('aria-label')).toStrictEqual(
      Sample.args.tooltipProps.title
    )
  })

  it('should renders disabled properly', () => {
    const { debug } = render(<Disabled {...Disabled.args} />)

    const button = screen.getByRole('button')

    expect(button.getAttribute('aria-disabled')).toStrictEqual('true')
  })
})
