import { apiQuests } from 'api/services/quests'

import {
  removeRequestIdMock,
  removeResponseMock,
} from '__mocks__/app/api/quests/[id]/route'
import { ENDPOINTS } from 'api/utils/constants/endpoints'
import { BASE_URL } from 'api/utils/constants/envs'
import { Mock, afterEach, describe, expect, it, vi } from 'vitest'
import { DELETE } from './route'

vi.mock('api/libs/fetcher')
vi.mock('api/services/quests')
const apiQuestsMock = {
  remove: apiQuests.remove as Mock,
}

describe('App/Api/Quests/[ID]', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  describe('DELETE', () => {
    it('should remove a quest', async () => {
      apiQuestsMock.remove.mockResolvedValueOnce(removeResponseMock)

      const request = new Request(`${BASE_URL + ENDPOINTS.QUESTS}/123`, {
        method: 'DELETE',
      })

      const response = await DELETE(request, {
        params: { id: removeRequestIdMock },
      })

      expect(apiQuests.remove).toHaveBeenCalledWith(removeRequestIdMock)
      expect(await response.json()).toEqual(removeResponseMock)
    })
  })
})
