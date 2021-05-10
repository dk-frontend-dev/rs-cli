export const writeFile = (fs, root, data) => {
  let path
  if (root.includes('./')) {
    path = root.replace('./', '')
  } else {
    path = root
  }
  const writeStream = fs.createWriteStream(`./${root.trim()}`, {flags: 'a+'})
  writeStream.write(data)
}

export const readFile = (fs, root, res) => {
  let path
  if (root.includes('./')) {
    path = root.replace('./', '')
  } else {
    path = root
  }

  const readStream = fs.createReadStream(`./${root.trim()}`, 'utf8')
  readStream.on('data', data => {
    res(data)
  })
  readStream.on('error', () => {
    process.stderr.write('No Such or impossible to open same file!')
  })
}
