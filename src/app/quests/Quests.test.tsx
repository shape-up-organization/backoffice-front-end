import { cleanup, render, screen, waitFor } from '@testing-library/react'
import { Mock, afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { getMethodResponseMock } from '__mocks__/app/api/quests/route'
import { apiQuests } from 'api/services/quests'

import { Sample } from './Quests.stories'

vi.mock('api/libs/fetcher')
vi.mock('api/services/quests')
const apiQuestsMock = {
  list: apiQuests.list as Mock,
  create: apiQuests.create as Mock,
  update: apiQuests.update as Mock,
}

describe('Pages/Quests', () => {
  describe('Sample', () => {
    beforeEach(() => {
      render(<Sample />)
    })

    afterEach(() => {
      cleanup()
    })

    it('should renders quests page properly', async () => {
      apiQuestsMock.list.mockResolvedValue(getMethodResponseMock)

      const circularProgress = document.querySelector(
        '.MuiCircularProgress-root'
      )
      expect(circularProgress).toBeInTheDocument()

      await waitFor(() =>
        expect(
          screen.getByRole('button', { name: /create pack/i })
        ).toBeInTheDocument()
      )

      const questsTable = document.querySelector(
        '.MuiDataGrid-root'
      ) as HTMLElement
      expect(questsTable).toBeInTheDocument()
    })
  })
})
