# vigenere-encoder

Vigenere cipher encoder/decoder. (npm package)

## Install

```npm
npm i vigenere-encoder
```

## Use

```node
import v from "vigenere-encoder"
```
or
```node
const v = require("vigenere-encoder")
```

## Example

```node
const text = "Hello, world!"
const key = "my key"

const cipherText = v.encode(text, key)
console.log(cipherText)

const plainText = v.decode(cipherText, key)
console.log(plainText)
```
output:
```bash
tcvpm, gsppj!
hello, world!
```
