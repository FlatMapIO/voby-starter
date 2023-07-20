import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts({
  root: {
    selector: '&[data-scope="responsive-indicator"]',
  },
  sizer: {
    selector: '&[data-part="sizer"]',
  },
})

export const responsiveIndicator = defineRecipe({
  name: 'responsiveIndicator',
  base: parts({
    root: {
      pos: 'fixed',
      display: 'flex',
      placeItems: 'center',
      placeContent: 'center',
      bottom: '1',
      left: '1',
      w: '6',
      h: '6',
      p: '3',
      zIndex: '50',
      rounded: 'full',
      bg: 'gray.800',
      fontSize: 'xs',
      color: 'white',
      transitionProperty: 'opacity',
      transitionTimingFunction: 'default',
      transitionDuration: 'fast',
      _hover: {
        opacity: '0.1',
      },
    },
    sizer: {
      _before: {
        content: 'sm',
      },
      md: {
        _before: {
          content: 'md',
        },
      },
      lg: {
        _before: {
          content: 'lg',
        },
      },
      xl: {
        _before: {
          content: 'xl',
        },
      },
      '2xl': {
        _before: {
          content: '2xl',
        },
      },
    },
  }),
})
