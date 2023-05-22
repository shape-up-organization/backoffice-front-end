import fetcher from 'api/libs/fetcher'
import { Quest } from 'api/services/quests/types'
import { QuestForm } from 'app/quests/schema'
import { API_ENDPOINTS } from 'utils/constants/apiEndpoints'

const fetchQuests = {
  create: async (payload: QuestForm) =>
    await fetcher(API_ENDPOINTS.QUESTS, {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  remove: async (id: string) =>
    await fetcher(
      `${API_ENDPOINTS.QUESTS}/${id}`,
      {
        method: 'DELETE',
      },
      {
        withoutJson: true,
      }
    ),
  update: async (payload: Quest) =>
    await fetcher(API_ENDPOINTS.QUESTS, {
      method: 'PUT',
      body: JSON.stringify(payload),
    }),
}

export { fetchQuests }
