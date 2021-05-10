const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

export const encode = (string, offset) => {
  let newStr = ''

  if (offset > -1) {
    string.split('').forEach(el => {
      let upperCase = false
      if (el === el.toUpperCase()) {
        upperCase = true
        el = el.toLowerCase()
      }
      const index = letters.indexOf(el)
      const sum = offset + index

      if (index === -1) {
        newStr += el
        return
      }

      if (el === ' ') {
        newStr += ' '
        return
      }

      for (let i = index, j = index; i <= sum; i++, j++) {
        if (j === letters.length && i !== sum) {
          j = 0
          continue
        } else if (j === 26) {
          j = 0
        }
        if (i === sum) {
          newStr += upperCase ? letters[j].toUpperCase() : letters[j]
        }
      }
    })
  } else {
    string.split('').forEach(el => {
      let upperCase = false
      if (el === el.toUpperCase()) {
        upperCase = true
        el = el.toLowerCase()
      }
      const index = letters.indexOf(el)
      const sum = index + Math.abs(offset)

      if (index === -1) {
        newStr += el
        return
      }

      if (el === ' ') {
        newStr += ' '
        return
      }
      for (let i = index, j = index; i <= sum; i++, j--) {
        if (j === 0 && i !== sum) {
          j = 26
          continue
        } else if (j === -1) {
          j = 25
        }
        if (i === sum) {
          newStr += upperCase ? letters[j].toUpperCase() : letters[j]
        }
      }
    })
  }

  return newStr
}

export const decode = (string, offset) => {
  let newStr = ''

  if (offset > -1) {
    string.split('').forEach(el => {
      let upperCase = false
      if (el === el.toUpperCase()) {
        upperCase = true
        el = el.toLowerCase()
      }
      const index = letters.indexOf(el)
      const sum = index + offset

      if (index === -1) {
        newStr += el
        return
      }

      if (el === ' ') {
        newStr += ' '
        return
      }
      for (let i = index, j = index; i <= sum; i++, j--) {
        if (j === 0 && i !== sum) {
          j = 26
          continue
        } else if (j === -1) {
          j = 25
        }
        if (i === sum) {
          newStr += upperCase ? letters[j].toUpperCase() : letters[j]
        }
      }
    })
  } else {
    string.split('').forEach(el => {
      let upperCase = false
      if (el === el.toUpperCase()) {
        upperCase = true
        el = el.toLowerCase()
      }
      const index = letters.indexOf(el)
      const sum = Math.abs(offset) + index

      if (index === -1) {
        newStr += el
        return
      }

      if (el === ' ') {
        newStr += ' '
        return
      }

      for (let i = index, j = index; i <= sum; i++, j++) {
        if (j === letters.length && i !== sum) {
          j = 0
          continue
        } else if (j === 26) {
          j = 0
        }
        if (i === sum) {
          newStr += upperCase ? letters[j].toUpperCase() : letters[j]
        }
      }
    })
  }

  return newStr
}

export const action = (action, data, shift, func1, func2) => {
  if (action === 'encode') {
    return func1(data, shift)
  } else if (action === 'decode') {
    return func2(data, shift)
  }
  throw new Error('Invalid name for action!')
}
