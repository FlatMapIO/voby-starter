import { $ } from 'voby'

import { css } from '@styled-system/css'
import { flex } from '@styled-system/patterns'
import { button } from '@styled-system/recipes'

import { TailwindIndicator } from './components/responsive-indicator'
import { ThemeToggle } from './components/theme-toggle'

export const App = () => {
  const count = $(0)

  return (
    <div
      class={flex({
        direction: 'column',
        gap: '4',
        p: '8',
      })}
    >
      <div>
        <ThemeToggle />
      </div>
      <main>
        <h1>Vite + Voby</h1>
        <div
          class={css({
            gap: '10',
          })}
        >
          <button
            data-scope='button'
            data-part='root'
            class={[button({ variant: 'primary' })]}
            onClick={() => count((count) => count + 1)}
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </main>

      <TailwindIndicator />
    </div>
  )
}
