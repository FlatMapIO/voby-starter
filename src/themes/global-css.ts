import { defineGlobalStyles } from '@pandacss/dev'

export default defineGlobalStyles({
  body: {
    minH: 'screen',
    overflow: 'hidden',
    _motionSafe: {
      transition: 'background',
    },
  },
})
