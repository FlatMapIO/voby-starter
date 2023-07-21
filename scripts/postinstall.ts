import { existsSync, rmSync } from 'node:fs'
import { join as joinPath } from 'node:path'
import { cwd } from 'node:process'

function removeVobyTsConfig() {
  const p = (m: string) => joinPath(cwd(), 'node_modules', m, 'tsconfig.json')
  const rm = (m: string) => existsSync(p(m)) && rmSync(p(m))
  rm('voby')
  rm('oby')
}

removeVobyTsConfig()
