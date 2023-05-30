import { strings } from 'utils/helpers/strings'

const tests = {
  getStyleProperty: (
    element: HTMLElement,
    property: keyof CSSStyleDeclaration
  ) => {
    const style = window.getComputedStyle(element)
    return style.getPropertyValue(strings.toKebabCase(property as string))
  },
}

export { tests }
