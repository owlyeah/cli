module.exports = {
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
  ],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^[../]',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  semi: false,
  singleQuote: true,
}