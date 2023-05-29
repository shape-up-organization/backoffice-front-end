import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import fetcher from './fetcher'

describe('Api/Libs', () => {
  describe('Fetcher', () => {
    beforeEach(() => {
      global.fetch = vi.fn().mockResolvedValue({
        json: vi.fn().mockResolvedValue({ data: 'Mocked response' }),
      })
    })

    afterEach(() => {
      vi.resetAllMocks()
    })

    it('should fetch and return JSON response', async () => {
      const response = await fetcher('/api/data')

      expect(fetch).toHaveBeenCalledWith('/api/data', undefined)
      expect(response).toEqual({ data: 'Mocked response' })
    })

    it('should return the raw response if "withoutJson" option is true', async () => {
      const response = await fetcher('/api/data', undefined, {
        withoutJson: true,
      })

      expect(fetch).toHaveBeenCalledWith('/api/data', undefined)
      expect(response).toHaveProperty('json')
    })
  })
})
