import { Mock, afterEach, describe, expect, it, vi } from 'vitest'

import {
  errorResponseMock,
  positiveResponseMock,
} from '__mocks__/api/utils/helpers/tryCatch'
import fetcher from 'api/libs/fetcher'
import { tryCatch } from 'api/utils/helpers/tryCatch'

vi.mock('api/libs/fetcher')
const fetcherMock = fetcher as Mock

describe('Api/Helpers', () => {
  describe('TryCatch', () => {
    afterEach(() => {
      vi.resetAllMocks()
    })

    it('should call fetcher and return the response', async () => {
      const route = '/api/data'
      const mockResponse = positiveResponseMock

      fetcherMock.mockResolvedValue(mockResponse)

      const response = await tryCatch(route)

      expect(fetcher).toHaveBeenCalledWith(route, undefined)
      expect(response).toBe(mockResponse)
    })

    it('should return CustomError on fetcher error', async () => {
      const route = '/api/data'
      const mockError = new Error('Network error')
      const expectedError = errorResponseMock

      fetcherMock.mockRejectedValue(mockError)

      const response = await tryCatch(route)

      expect(fetcher).toHaveBeenCalledWith(route, undefined)
      expect(response).toEqual(expectedError)
    })
  })
})
