export type CustomConfigs = {
  withoutJson: boolean
}

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
  options?: CustomConfigs
): Promise<any> {
  const res = await fetch(input, init)

  if (options?.withoutJson) return res

  return await res.json()
}
