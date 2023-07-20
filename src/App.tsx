import { $ } from 'voby'

import { TailwindIndicator } from './components/tailwind-indicator'
import { ThemeToggle } from './components/theme-toggle'
import { button } from './styled-system/recipes'

export const App = () => {
  const count = $(0)
  return (
    <>
      <div>
        <ThemeToggle />
      </div>
      <main>
        <h1>Vite + Voby</h1>
        <div class='card'>
          <button
            data-scope='button'
            data-part='root'
            class={button({ variant: 'primary' })}
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
    </>
  )
}
