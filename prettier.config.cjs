/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: 'lf',
  arrowParens: 'always',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  importOrder: [
    '^voby$',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^~/lib/(.*)$',
    '^~/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
  ],
}
