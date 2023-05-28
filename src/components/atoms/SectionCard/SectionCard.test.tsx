import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeAll, describe, expect, it, vi } from 'vitest'

import { useRouter } from 'next/navigation'

import { Sample } from './SectionCard.stories'

describe('Atoms/SectionCard', () => {
  beforeAll(() => {
    vi.mock('next/navigation', () => ({
      useRouter: vi.fn().mockReturnValue({
        push: vi.fn(),
      }),
    }))
  })

  it('should renders properly', () => {
    render(<Sample {...Sample.args} />)
    const button = screen.getByRole('button')

    expect(button).toHaveTextContent(Sample.args.title)
  })

  it('should redirect to the correct path', () => {
    render(<Sample {...Sample.args} />)
    const button = screen.getByRole('button')

    userEvent.click(button)
    expect(useRouter).toHaveBeenCalled()
  })
})
