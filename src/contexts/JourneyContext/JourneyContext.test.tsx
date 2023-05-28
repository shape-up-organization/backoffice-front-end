import { render } from '@testing-library/react'
import { beforeAll, describe, expect, it, vi } from 'vitest'

import { ROUTES } from 'utils/constants/routes'

import { JourneyContext, JourneyProvider } from './JourneyContext'

describe('Contexts/JourneyContext', () => {
  beforeAll(() => {
    vi.mock('next/navigation', () => ({
      useRouter: vi.fn().mockReturnValue({
        push: vi.fn(),
      }),
      notFound: vi.fn(),
    }))
  })

  it('sets the initial current route to HOME', () => {
    render(
      <JourneyProvider>
        <JourneyContext.Consumer>
          {({ currentRoute }) => {
            expect(currentRoute).toBe(ROUTES.get('HOME'))
            return null
          }}
        </JourneyContext.Consumer>
      </JourneyProvider>
    )
  })
})
