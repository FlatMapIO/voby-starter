import { createAnatomy } from '@zag-js/anatomy'

export const buttonAnatomy = createAnatomy('button')
  .parts('root', 'icon', 'spinner')
  .build()
