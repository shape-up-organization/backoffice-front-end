import { NextResponse } from 'next/server'

import { apiQuests } from 'api/services/quests'
import { SlugDelete } from './types'

export async function DELETE(request: Request, slug: SlugDelete) {
  const { id } = slug.params
  const res = await apiQuests.remove(id)

  return NextResponse.json(res)
}
