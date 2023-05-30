import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ROUTES } from 'utils/constants/routes'

import { JourneyContext, JourneyProvider } from './JourneyContext'

describe('Contexts/JourneyContext', () => {
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
