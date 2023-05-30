import { Mock, beforeEach, describe, expect, it, vi } from 'vitest'

import {
  createRequestMock,
  createResponseMock,
  listErrorResponseMock,
  listResponseMock,
  removeRequestIdMock,
  removeResponseMock,
  updateRequestMock,
  updateResponseMock,
} from '__mocks__/api/services/quests'
import { apiQuests } from 'api/services/quests'
import { ENDPOINTS } from 'api/utils/constants/endpoints'
import { BASE_URL } from 'api/utils/constants/envs'
import { tryCatch } from 'api/utils/helpers/tryCatch'

vi.mock('api/utils/helpers/tryCatch')
const tryCatchMock = tryCatch as Mock

describe('Api/Services/Quests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Create', () => {
    it('should create a new quest', async () => {
      tryCatchMock.mockResolvedValueOnce(createResponseMock)

      const result = await apiQuests.create(createRequestMock)

      expect(tryCatch).toHaveBeenCalledWith(BASE_URL + ENDPOINTS.QUESTS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(createRequestMock),
      })
      expect(result).toEqual(createResponseMock)
    })
  })

  describe('List', () => {
    it('should retrieve the list of quests', async () => {
      tryCatchMock.mockResolvedValueOnce(listResponseMock)

      const result = await apiQuests.list()

      expect(tryCatch).toHaveBeenCalledWith(BASE_URL + ENDPOINTS.QUESTS)
      expect(result).toEqual(listResponseMock)
    })

    it('should handle error when retrieving the list of quests', async () => {
      tryCatchMock.mockRejectedValueOnce(listErrorResponseMock)

      try {
        await apiQuests.list()
      } catch (error) {
        expect(tryCatch).toHaveBeenCalledWith(BASE_URL + ENDPOINTS.QUESTS)
        expect(error).toEqual(listErrorResponseMock)
      }
    })
  })

  describe('Remove', () => {
    it('should remove a quest', async () => {
      tryCatchMock.mockResolvedValueOnce(removeResponseMock)

      const result = await apiQuests.remove(removeRequestIdMock)

      expect(tryCatch).toHaveBeenCalledWith(
        `${BASE_URL + ENDPOINTS.QUESTS}/${removeRequestIdMock}`,
        {
          method: 'DELETE',
        }
      )
      expect(result).toEqual(removeResponseMock)
    })
  })

  describe('Update', () => {
    it('should update a quest', async () => {
      tryCatchMock.mockResolvedValueOnce(updateResponseMock)

      const result = await apiQuests.update(updateRequestMock)

      expect(tryCatch).toHaveBeenCalledWith(BASE_URL + ENDPOINTS.QUESTS, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateRequestMock),
      })
      expect(result).toEqual(updateResponseMock)
    })
  })
})
