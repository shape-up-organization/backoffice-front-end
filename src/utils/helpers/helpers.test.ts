import { describe, expect, it } from 'vitest'

import { ROUTES } from 'utils/constants/routes'

import { routing } from './routing'
import { strings } from './strings'
import { tests } from './tests'

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

  describe('Strings', () => {
    it('should transform to kebab case', () => {
      const camelCase = strings.toKebabCase('camelCase')
      expect(camelCase).toBe('camel-case')
      const camelCaseWithNumber = strings.toKebabCase('camelCase2')
      expect(camelCaseWithNumber).toBe('camel-case2')

      const snakeCase = strings.toKebabCase('snake_case')
      expect(snakeCase).toBe('snake-case')
      const snakeCaseWithNumber = strings.toKebabCase('snake_case2')
      expect(snakeCaseWithNumber).toBe('snake-case2')

      const pascalCase = strings.toKebabCase('PascalCase')
      expect(pascalCase).toBe('pascal-case')
      const pascalCaseWithNumber = strings.toKebabCase('PascalCase2')
      expect(pascalCaseWithNumber).toBe('pascal-case2')
    })
  })

  describe('Tests', () => {
    it('should get style property', () => {
      const element = document.createElement('div')
      element.style.setProperty('color', 'red')
      const color = tests.getStyleProperty(element, 'color')
      expect(color).toBe('red')
    })
  })
})
