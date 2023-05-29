import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import { Disabled, Sample } from './TooltipButton.stories'

describe('Atoms/TooltipButton', () => {
  describe('Sample', () => {
    beforeEach(() => {
      render(<Sample {...Sample.args} />)
    })

    afterEach(() => {
      cleanup()
    })

    it('should renders properly', () => {
      const button = screen.getByRole('button')

      expect(button.getAttribute('aria-label')).toStrictEqual(
        Sample.args.tooltipProps.title
      )
    })
  })

  describe('Disabled', () => {
    beforeEach(() => {
      render(<Disabled {...Disabled.args} />)
    })

    afterEach(() => {
      cleanup()
    })

    it('should renders disabled properly', () => {
      const button = screen.getByRole('button')

      expect(button.getAttribute('aria-disabled')).toStrictEqual('true')
    })
  })
})
