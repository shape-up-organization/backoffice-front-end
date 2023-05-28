import matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeAll, expect, vi } from 'vitest'

expect.extend(matchers)

beforeAll(() => {
  vi.mock('next/font/local', () => ({
    __esModule: true,
    default: vi.fn().mockReturnValue({
      style: {
        fontFamily: 'Ubuntu',
      },
    }),
  }))
})

afterEach(() => {
  cleanup()
})
