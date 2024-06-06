# vigenere-encoder

Vigenere cipher encoder/decoder. (npm package)

## Install

```bash
npm i vigenere-encoder
```

## Use

```node
import v from "vigenere-encoder"
```

## Example

```node
import v from "vigenere-encoder"

const text = "Hello, world!"
const key = "my key"

const cipherText = v.encode(text, key)
console.log(cipherText)

const plainText = v.decode(cipherText, key)
console.log(plainText)
```
output:
```txt
tcvpm, gsppj!
hello, world!
```
