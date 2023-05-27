import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'

import CrisisAlertRoundedIcon from '@mui/icons-material/CrisisAlertRounded'
import { useMediaQuery } from '@mui/material'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

import useNavigation from './useNavigation'
import useToast from './useToast'
import useWindowSizes from './useWindowSizes'

describe('Hooks', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('useNavigation', () => {
    beforeAll(() => {
      vi.mock('next/navigation', () => ({
        useRouter: vi.fn().mockReturnValue({
          push: vi.fn(),
        }),
        notFound: vi.fn(),
      }))
    })

    afterEach(() => {
      vi.clearAllMocks()
    })

    it('should change the current route', () => {
      render(<p id="title" />)
      const { result } = renderHook(() => useNavigation())

      result.current.changeRoute('/quests')

      expect(document.title).toBe('Backoffice')
      expect(result.current.currentRoute).toEqual({
        icon: CrisisAlertRoundedIcon,
        pathname: '/quests',
        title: 'Quests',
      })
      expect(document.querySelector('#title')?.innerHTML).toBe(
        result.current.currentRoute?.title
      )
      expect(useRouter().push).toHaveBeenCalledWith(
        result.current.currentRoute?.pathname
      )
    })

    it('should change to 404 route', () => {
      render(<p id="title" />)
      const { result } = renderHook(() => useNavigation())

      result.current.changeRoute('/random-route')

      expect(document.title).toBe('404')
      expect(document.querySelector('#title')?.innerHTML).toBe('')
      expect(useRouter().push).toHaveBeenCalledWith('/random-route')
    })
  })

  describe('useToast', () => {
    beforeAll(() => {
      vi.mock('react-toastify', () => ({
        toast: vi.fn(),
      }))
    })

    it('should throw default toast', () => {
      const { result } = renderHook(() => useToast())
      result.current.handleToast({
        message: 'Test default',
      })

      expect(toast).toHaveBeenCalled()
      expect(toast).toHaveBeenCalledWith('Test default', {
        type: 'default',
      })
    })

    it('should throw success toast', () => {
      const { result } = renderHook(() => useToast())
      result.current.handleToast({
        message: 'Test success',
        type: 'success',
      })

      expect(toast).toHaveBeenCalled()
      expect(toast).toHaveBeenCalledWith('Test success', {
        type: 'success',
      })
    })
  })

  describe('useWindowSizes', () => {
    beforeEach(() => {
      vi.mock('@mui/material', async () => {
        const actual = (await vi.importActual('@mui/material')) as object
        return {
          ...actual,
          useMediaQuery: vi.fn().mockReturnValue(false),
        }
      })
    })

    it('should get the corrects media queries and return false on both', () => {
      const { result } = renderHook(() => useWindowSizes())
      const { isDesktop, isMobile } = result.current

      expect(isDesktop).toBeFalsy()
      expect(isMobile).toBeFalsy()

      expect(useMediaQuery).toHaveBeenCalledTimes(2)
      expect(useMediaQuery).toHaveBeenNthCalledWith(
        1,
        '@media (min-width:900px)' // UP MD - Desktop
      )
      expect(useMediaQuery).toHaveBeenNthCalledWith(
        2,
        '@media (max-width:899.95px)' // DOWN MD - Mobile
      )
    })
  })
})
