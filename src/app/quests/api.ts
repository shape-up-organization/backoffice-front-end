import { useQuery } from '@tanstack/react-query'
import fetcher from 'api/libs/fetcher'
import { Quest } from 'api/services/quests/types'
import { QuestForm } from 'app/quests/schema'
import { API_ENDPOINTS } from 'utils/constants/apiEndpoints'

const fetchQuests = {
  create: async (payload: QuestForm) => {
    return await fetcher(API_ENDPOINTS.QUESTS, {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  },
  list: async (): Promise<Quest[]> => {
    return await fetcher(API_ENDPOINTS.QUESTS)
  },
  remove: async (id: string) => {
    return await fetcher(
      `${API_ENDPOINTS.QUESTS}/${id}`,
      {
        method: 'DELETE',
      },
      {
        withoutJson: true,
      }
    )
  },
  update: async (payload: Quest) => {
    return await fetcher(API_ENDPOINTS.QUESTS, {
      method: 'PUT',
      body: JSON.stringify(payload),
    })
  },
  useQuests: () => {
    return useQuery({
      queryKey: ['quests'],
      queryFn: () => fetchQuests.list(),
    })
  },
}

export { fetchQuests }
