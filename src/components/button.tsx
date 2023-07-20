import { button, ButtonVariantProps } from '@styled-system/recipes'

import { buttonAnatomy } from '~/themes/anatomy'

export const Button = ({
  children,
  variant,
  size,
  ...props
}: JSX.IntrinsicElements['button'] &
  ButtonVariantProps & { children: JSX.Children }) => (
  <button
    {...props}
    {...buttonAnatomy.root.attrs}
    class={[button({ variant, size }), props.class]}
  >
    {children}
  </button>
)
