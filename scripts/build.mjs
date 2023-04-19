import * as esbuild from 'esbuild'

await esbuild.build({
  bundle: true,
  entryPoints: ['index.ts'],
  outfile: 'outfile.mjs',
  format: 'esm',
  platform: 'node',
  target: 'node18',
})
