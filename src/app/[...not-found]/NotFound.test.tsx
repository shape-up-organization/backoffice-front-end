import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import { Sample } from './NotFound.stories'

describe('Pages/NotFound', () => {
  describe('Sample', () => {
    beforeEach(() => {
      render(<Sample />)
    })

    afterEach(() => {
      cleanup()
    })

    it('should renders home page properly', () => {
      const title = screen.getByText(/Page not found/i) as HTMLHeadingElement
      const image = screen.getByRole('img') as HTMLImageElement

      expect(title).toBeInTheDocument()
      expect(image.src).toContain('/public/not-found-with-number.svg')
      expect(image.alt).toStrictEqual('Not found image')
    })
  })
})
