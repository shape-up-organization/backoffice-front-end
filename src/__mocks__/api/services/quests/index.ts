export const createRequestMock = Object.freeze({
  name: 'New Quest',
  category: 'Category',
  xp: 100,
  unlockXp: 200,
  description: 'Quest description',
  duration: 60,
  classification: 'Classification',
  exercises: ['Exercise 1', 'Exercise 2'],
})
export const createResponseMock = Object.freeze({
  id: '123',
  name: 'New Quest',
})

export const listResponseMock = Object.freeze([
  { id: '1', name: 'Quest 1' },
  { id: '2', name: 'Quest 2' },
])
export const listErrorResponseMock = Object.freeze({
  status: 500,
  data: 'Failed to retrieve quest list',
})

export const removeRequestIdMock = '123'
export const removeResponseMock = Object.freeze({
  id: removeRequestIdMock,
  name: 'Quest',
})

export const updateRequestMock = Object.freeze({
  id: '123',
  name: 'New Quest',
  category: 'Category',
  xp: 100,
  unlockXp: 200,
  description: 'Quest description',
  duration: 60,
  classification: 'Classification',
  exercises: ['Exercise 1', 'Exercise 2'],
})
export const updateResponseMock = Object.freeze({
  id: '123',
  name: 'New Quest',
})
