import fetcher from 'api/libs/fetcher'

interface CustomError {
  status: number
  data: object | string
}

const tryCatch = async (
  url: RequestInfo,
  options?: RequestInit
): Promise<Response | CustomError> => {
  try {
    return await fetcher(url, options)
  } catch (error) {
    return {
      status: 500,
      data: 'Internal Server Error',
    }
  }
}

export { tryCatch }
