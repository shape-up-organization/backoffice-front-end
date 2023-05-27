import { describe, expect, it } from 'vitest'

import { ROUTES } from 'utils/constants/routes'

import { routing } from './routing'

describe('Helpers', () => {
  describe('Routing', () => {
    it('should correctly route data by pathname', () => {
      const path = routing.getByPathname('/')
      expect(path).toStrictEqual(ROUTES.get('HOME'))
    })

    it('should return true if informed route exists', () => {
      const exists = routing.existsByPathname('/')
      expect(exists).toBeTruthy()
    })

    it('should return false if informed route does not exist', () => {
      const exists = routing.existsByPathname('/random-route')
      expect(exists).toBeFalsy()
    })
  })
})
