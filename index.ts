#! /usr/bin/env node
// import prompts from 'prompts'
import { consola } from 'consola'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import * as url from 'node:url'

const projectName = await consola.prompt('Project name', {
  type: 'text',
  placeholder: 'my-project',
  default: 'my-project',
})
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const templateRoot = path.resolve(__dirname, 'template')
const targetDir = `${process.cwd()}/${projectName}`
await fs.mkdir(targetDir)
await fs.cp(templateRoot, targetDir, { recursive: true })
