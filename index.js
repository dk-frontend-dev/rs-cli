import commander from 'commander'
import {encode, decode, action} from './encrypting.js'
import {writeFile, readFile} from './streams.js'
import readline from 'readline'
import {inputRl, outputRl} from './readline.js'
import process from 'process'
import fs from 'fs'
const program = commander

program
  .option('-a --action <action>', 'encode or decode file or your string')
  .option('-s --shift <shift>', 'offset')
  .option('-i, --input <input>', 'input file')
  .option('-o, --output <output>', 'output file')

program.parse(process.argv)

const options = program.opts()

if (!options.shift && !options.action) {
  console.error('Missed required command!\n-a | --action\n-s | --shift')
} else if (!options.shift) {
  console.error('Missed required command!\n-s | --shift')
} else if (!options.action) {
  console.error('Missed required command!\n-a | --action')
} else if (options.action !== 'decode' && options.action !== 'encode') {
  console.error('Wrond value for command: -a | --action')
} else if (options.action && options.shift && options.input && options.output) {
  readFile(fs, options.input, data => {
    const code = action(options.action, data, +options.shift, encode, decode)
    writeFile(fs, options.output, code)
  })
} else if (options.action && options.shift && !options.output && !options.input) {
  inputRl(readline, data => {
    const code = action(options.action, data, +options.shift, encode, decode)
    console.log('Result: ', code)
  })
} else if (options.action && options.shift && options.output && !options.input) {
  inputRl(readline, data => {
    const code = action(options.action, data, +options.shift, encode, decode)
    writeFile(fs, options.output, code)
  })
} else if (options.action && options.shift && !options.output && options.input) {
  readFile(fs, options.input, data => {
    const code = action(options.action, data, +options.shift, encode, decode)
    console.log('Data: ', code)
    outputRl(readline, data2 => {
      fs.appendFile(data2, code, err => {
        if (err) process.stderr.write('You did not specify the file name!')
      })
    })
  })
}
