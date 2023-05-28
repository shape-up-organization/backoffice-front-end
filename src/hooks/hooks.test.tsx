import { renderHook } from '@testing-library/react-hooks'
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'

import { useMediaQuery } from '@mui/material'
import { toast } from 'react-toastify'

import useToast from './useToast'
import useWindowSizes from './useWindowSizes'

describe('Hooks', () => {
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
