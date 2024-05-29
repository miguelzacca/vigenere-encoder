"use strict";

const letters = "abcdefghijklmnopqrstuvwxyz";

/**
 * @param {string} input
 * @param {string} key
 * @example
 * inputValidator(input, key)
 * @returns {void}
 * @throws
 */
const inputValidator = (input, key) => {
  if (input.length !== key.length) {
    throw new Error("The key must have the same size as the text.");
  }
};

/**
 * @param {string} input
 * @param {string} key
 * @example
 * const cipherText = encode("example", "abcdefg")
 * @returns {string}
 */
const encode = (input, key) => {
  inputValidator(input, key);

  let cipherText = "";

  for (let index = 0; index < input.length; index++) {
    const plainTextIndex = letters.indexOf(input[index]);
    const keyIndex = letters.indexOf(key[index]);

    const newIndex = (plainTextIndex + keyIndex) % letters.length;

    cipherText += letters[newIndex];
  }

  return cipherText;
};

/**
 * @param {string} input
 * @param {string} key
 * @example
 * const plainText = decode("oshfkan", "abcdefg")
 * @returns {string}
 */
const decode = (input, key) => {
  inputValidator(input, key);

  let plainText = "";

  for (let index = 0; index < input.length; index++) {
    const cipherTextIndex = letters.indexOf(input[index]);
    const keyIndex = letters.indexOf(key[index]);

    const newIndex =
      (cipherTextIndex - keyIndex + letters.length) % letters.length;

    plainText += letters[newIndex];
  }

  return plainText;
};

export default { encode, decode };
