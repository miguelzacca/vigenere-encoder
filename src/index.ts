import { middleware } from 'func-middleware'

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'

const inputValidator = (input: string, key: string, encode: boolean) => {
  if (!input || !key) {
    throw new Error('No field can be empty.')
  }

  return [
    input.toLowerCase().trim(),
    key.toLowerCase().split(' ').join('').trim(),
    encode,
  ]
}

const process = middleware((input: string, key: string, encode: boolean) => {
  let output = ''

  for (let i = 0; i < input.length; ++i) {
    const inputIndex = LETTERS.indexOf(input[i])

    if (inputIndex === -1) {
      output += input[i]
      continue
    }

    const keyIndex = LETTERS.indexOf(key[i % key.length])

    const calc = encode
      ? inputIndex + keyIndex
      : inputIndex - keyIndex + LETTERS.length

    output += LETTERS[calc % LETTERS.length]
  }

  return output
}, inputValidator)

const encode = (plainText: string, key: string) => {
  return process(plainText, key, true)
}

const decode = (cipherText: string, key: string) => {
  return process(cipherText, key, false)
}

export default { encode, decode }
