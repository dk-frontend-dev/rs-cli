export const inputRl = (readline, res) => {
  const intf = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  intf.question('write text: ', line => {
    res(line)
    intf.close()
  })
}

export const outputRl = (readline, res) => {
  const intf = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  intf.question('where to output the data? ', line => {
    res(line)
    intf.close()
  })
}
