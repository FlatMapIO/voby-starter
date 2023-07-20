import { css } from '../styled-system/css'

export const TailwindIndicator = () => {
  if (import.meta.env.PROD) return null
  return (
    <div
      class={[
        css({
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
        }),
      ]}
    >
      <div
        class={css({
          display: 'block',
          sm: {
            display: 'none',
          },
        })}
      >
        xs
      </div>
      <div
        class={css({
          display: 'none',
          sm: { display: 'block' },
          md: { display: 'none' },
        })}
      >
        sm
      </div>
      <div
        class={css({
          display: 'none',
          md: { display: 'block' },
          lg: { display: 'none' },
        })}
      >
        md
      </div>
      <div
        class={css({
          display: 'none',
          lg: { display: 'block' },
          xl: { display: 'none' },
        })}
      >
        lg
      </div>
      <div
        class={css({
          display: 'none',
          xl: { display: 'block' },
          '2xl': { display: 'none' },
        })}
      >
        xl
      </div>
      <div
        class={css({
          display: 'none',
          '2xl': { display: 'block' },
        })}
      >
        2xl
      </div>
    </div>
  )
}
