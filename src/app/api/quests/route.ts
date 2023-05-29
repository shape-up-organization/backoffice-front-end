import { NextResponse } from 'next/server'

import { apiQuests } from 'api/services/quests'
import type { Quest } from 'api/services/quests/types'
import type { QuestForm } from 'app/quests/schema'

export async function GET() {
  const res = await apiQuests.list()
  return NextResponse.json(res)
}

export async function POST(request: Request) {
  const body = await request.text()
  const payload: QuestForm = JSON.parse(body)

  const res = await apiQuests.create(payload)

  return NextResponse.json(res)
}

export async function PUT(request: Request) {
  const body = await request.text()
  const payload: Quest = JSON.parse(body)

  const res = await apiQuests.update(payload)

  return NextResponse.json(res)
}
