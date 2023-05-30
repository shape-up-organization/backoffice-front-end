import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import { Sample } from './Home.stories'

describe('Pages/Home', () => {
  describe('Sample', () => {
    beforeEach(() => {
      render(<Sample />)
    })

    afterEach(() => {
      cleanup()
    })

    it('should renders home page properly', () => {
      const title = screen.getByText(/shapeup/i) as HTMLHeadingElement
      const questButtons = screen.getAllByRole('button', {
        name: /quests/i,
      }) as HTMLButtonElement[]
      const questNavbarButton = questButtons[0]
      const questSectionCardButton = questButtons[1]

      expect(title).toBeInTheDocument()
      expect(questNavbarButton).toBeInTheDocument()
      expect(questSectionCardButton).toBeInTheDocument()
      expect(questSectionCardButton).toHaveTextContent(/quests/i)
    })

    it('should change the title when click on the quest section card or navbar button', async () => {
      const title = screen.getByText(/shapeup/i) as HTMLHeadingElement
      const questNavbarButton = screen.getAllByRole('button', {
        name: /quests/i,
      })[0] as HTMLButtonElement

      expect(title).toHaveTextContent('ShapeUp')
      await userEvent.click(questNavbarButton)
      expect(title).toHaveTextContent('Quests')
    })
  })
})
