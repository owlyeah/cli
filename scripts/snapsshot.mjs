#!/usr/bin/env zx
import * as path from 'node:path'
import * as url from 'node:url'
import 'zx/globals'

$.verbose = false

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const playgroundDir = path.resolve(__dirname, '../templates/')
const bin = path.posix.relative('../templates/', '../outfile.cjs')

cd(playgroundDir)
console.log(playgroundDir)
console.log(bin)
// for (const flags of flagCombinations) {
//   const projectName = flags.join('-')

//   console.log(`Removing previously generated project ${projectName}`)
//   await $`rm -rf ${projectName}`

//   console.log(`Creating project ${projectName}`)
//   await $`node ${[bin, projectName, ...flags.map((flag) => `--${flag}`), '--force']}`
// }
