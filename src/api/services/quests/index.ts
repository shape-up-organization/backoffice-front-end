import type { Quest } from 'api/services/quests/types'
import { ENDPOINTS } from 'api/utils/constants/endpoints'
import { BASE_URL } from 'api/utils/constants/envs'
import { tryCatch } from 'api/utils/helpers/tryCatch'
import type { QuestForm } from 'app/quests/schema'

const routes = {
  list: BASE_URL + ENDPOINTS.QUESTS,
}

const apiQuests = {
  create: async (payload: QuestForm) =>
    tryCatch(routes.list, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }),
  list: async () => tryCatch(routes.list),
  remove: async (id: string) =>
    tryCatch(`${routes.list}/${id}`, {
      method: 'DELETE',
    }),
  update: async (payload: Quest) =>
    tryCatch(routes.list, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }),
}

export { apiQuests }
