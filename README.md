# vigenere-encoder

Vigenere cipher encoder/decoder.

## Install

```npm
npm i vigenere-encoder
```

## Use

```node
import vigenere from "vigenere-cipher"

const cipherText = vigenere.encode("example", "abcdefg")
const plainText = vigenere.decode(cipherText, "abcdefg")
```
