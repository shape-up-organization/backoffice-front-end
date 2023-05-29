import { apiQuests } from 'api/services/quests'

import {
  getMethodResponseMock,
  postRequestMock,
  postResponseMock,
  putRequestResponseMock,
} from '__mocks__/app/api/quests/route'
import { Mock, afterEach, describe, expect, it, vi } from 'vitest'
import { GET, POST, PUT } from './route'

vi.mock('api/libs/fetcher')
vi.mock('api/services/quests')
const apiQuestsMock = {
  list: apiQuests.list as Mock,
  create: apiQuests.create as Mock,
  update: apiQuests.update as Mock,
}

const LOCAL_URL = process.env.LOCAL_URL

describe('App/Api/Quests', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  describe('GET', () => {
    it('should return the list of quests', async () => {
      apiQuestsMock.list.mockResolvedValueOnce(getMethodResponseMock)

      const response = await GET()

      expect(apiQuests.list).toHaveBeenCalled()
      expect(response.status).toBe(200)
      expect(await response.json()).toEqual(getMethodResponseMock)
    })
  })

  describe('POST', () => {
    it('should create a new quest', async () => {
      apiQuestsMock.create.mockResolvedValueOnce(postResponseMock)

      const request = new Request(new URL('/quests', LOCAL_URL), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postRequestMock),
      })
      const response = await POST(request)

      expect(apiQuests.create).toHaveBeenCalledWith(postRequestMock)
      expect(response.status).toBe(200)
      expect(await response.json()).toEqual(postResponseMock)
    })
  })

  describe('PUT', () => {
    it('should update an existing quest', async () => {
      apiQuestsMock.update.mockResolvedValueOnce(putRequestResponseMock)

      const request = new Request(new URL('/quests', LOCAL_URL), {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(putRequestResponseMock),
      })
      const response = await PUT(request)

      expect(apiQuests.update).toHaveBeenCalledWith(putRequestResponseMock)
      expect(response.status).toBe(200)
      expect(await response.json()).toEqual(putRequestResponseMock)
    })
  })
})
