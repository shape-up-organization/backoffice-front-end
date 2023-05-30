import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import { ROUTES } from 'utils/constants/routes'

import { Sample } from './SectionCard.stories'

describe('Atoms/SectionCard', () => {
  describe('Sample', () => {
    beforeEach(() => {
      render(<Sample {...Sample.args} />)
    })

    afterEach(() => {
      cleanup()
    })

    it('should renders properly', () => {
      const button = screen.getByRole('button')

      expect(button).toHaveTextContent(ROUTES.get('HOME')?.title + '')
    })
  })
})
