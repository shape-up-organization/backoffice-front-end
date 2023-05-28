import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ROUTES } from 'utils/constants/routes'

import { Sample } from './SectionCard.stories'

describe('Atoms/SectionCard', async () => {
  it('should renders properly', () => {
    render(<Sample {...Sample.args} />)
    const button = screen.getByRole('button')

    expect(button).toHaveTextContent(ROUTES.get('HOME')?.title + '')
  })
})
