import { defineConfig } from '@pandacss/dev'

import globalCss from './src/themes/global-css'
import { recipes } from './src/themes/recipes'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: 'styled-system',

  globalCss,

  // Useful for theme customization
  theme: {
    extend: {
      recipes,
      semanticTokens: {
        colors: {
          fg: {
            default: { value: { base: '{colors.gray.900}', _dark: 'white' } },
            emphasized: {
              value: { base: '{colors.gray.700}', _dark: '{colors.gray.200}' },
            },
            muted: {
              value: { base: '{colors.gray.500}', _dark: '{colors.gray.400}' },
            },
            subtle: {
              value: { base: '{colors.gray.400}', _dark: '{colors.gray.500}' },
            },
            placeholder: {
              value: { base: '{colors.gray.600}', _dark: '{colors.gray.400}' },
            },
            inverted: {
              default: { value: { base: 'white', _dark: '{colors.black}' } },
            },
          },
          bg: {
            canvas: {
              value: { base: '{colors.gray.25}', _dark: '{colors.brown.900}' },
            },
            surface: {
              value: { base: '{colors.gray.50}', _dark: '{colors.brown.600}' },
            },
            muted: {
              value: { base: '{colors.gray.200}', _dark: '{colors.brown.400}' },
            },
            subtle: {
              value: { base: '{colors.gray.100}', _dark: '{colors.brown.500}' },
            },
          },
          accent: {
            default: {
              value: {
                base: '{colors.orange.400}',
                _dark: '{colors.orange.400}',
              },
            },
            emphasized: {
              value: {
                base: '{colors.orange.500}',
                _dark: '{colors.orange.500}',
              },
            },
            muted: {
              value: {
                base: '{colors.orange.400}',
                _dark: '{colors.orange.300}',
              },
            },
            subtle: {
              value: {
                base: '{colors.orange.50}',
                _dark: '{colors.orange.900}',
              },
            },
          },
          border: {
            default: {
              value: { base: '{colors.gray.200}', _dark: '{colors.brown.400}' },
            },
            emphasized: {
              value: { base: '{colors.gray.300}', _dark: '{colors.brown.300}' },
            },
          },
        },
      },
    },
  },
})
