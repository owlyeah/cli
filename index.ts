#! /usr/bin/env node
import * as fs from 'node:fs/promises'
import prompts from 'prompts'

const res = await prompts([
  {
    name: 'projectName',
    type: 'text',
    message: 'Project name:',
    initial: 'my-project',
    onState: (state) => state.value.toString().trim(),
  },
])
console.log(res)
// await fs.mkdir('test')
