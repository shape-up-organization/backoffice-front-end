import { ENDPOINTS } from 'api/utils/constants/endpoints'
import { BASE_URL } from 'api/utils/constants/envs'
import { tryCatch } from 'api/utils/helpers/tryCatch'

const routes = {
  get: BASE_URL + ENDPOINTS.QUESTS,
}

const apiQuests = {
  get: async () => tryCatch(routes.get, { next: { revalidate: 60 } }),
}

export { apiQuests }
