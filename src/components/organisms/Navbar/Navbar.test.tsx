import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Sample } from './Navbar.stories'

describe('Organisms/Navbar', async () => {
  it('should renders navbar items properly', () => {
    render(<Sample />)
    const shapeUpButton = screen.getByRole('button', { name: /shapeup/i })
    const questsButton = screen.getByRole('button', { name: /quests/i })

    expect(shapeUpButton).toBeInTheDocument()
    expect(questsButton).toBeInTheDocument()
  })
})
