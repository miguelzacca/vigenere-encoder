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
  if (!input || !key) {
    throw new Error("No field can be empty.");
  }
};

/**
 * @param {string} key
 * @param {number} index
 * @example
 * const keyIndex = handleKeyIndex("abc", 7)
 * @returns {string}
 */
const handleKeyIndex = (key, index) => {
  return key[index] || key[key.length % index];
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
    const keyIndex = letters.indexOf(handleKeyIndex(key, index));

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
    const keyIndex = letters.indexOf(handleKeyIndex(key, index));

    const newIndex =
      (cipherTextIndex - keyIndex + letters.length) % letters.length;

    plainText += letters[newIndex];
  }

  return plainText;
};

export default { encode, decode };
