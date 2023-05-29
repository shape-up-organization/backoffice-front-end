import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import { Sample } from './Navbar.stories'

describe('Organisms/Navbar', () => {
  describe('Sample', () => {
    beforeEach(() => {
      render(<Sample />)
    })

    afterEach(() => {
      cleanup()
    })

    it('should renders navbar items properly', () => {
      const shapeUpButton = screen.getByRole('button', { name: /shapeup/i })
      const questsButton = screen.getByRole('button', { name: /quests/i })

      expect(shapeUpButton).toBeInTheDocument()
      expect(questsButton).toBeInTheDocument()
    })
  })
})
