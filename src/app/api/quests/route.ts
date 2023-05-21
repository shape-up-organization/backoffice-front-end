import { NextResponse } from 'next/server'

import { apiQuests } from 'api/services/quests'

export async function GET(request: Request) {
  const res = await apiQuests.get()
  return NextResponse.json(res)
}
