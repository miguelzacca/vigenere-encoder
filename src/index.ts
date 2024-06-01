"use strict";

import { ValidData } from "./types/types";

const LETTERS = "abcdefghijklmnopqrstuvwxyz";

/**
 * @example
 * inputValidator(input, key)
 * @throws
 */
const inputValidator = (input: string, key: string): ValidData => {
  if (!input || !key) {
    throw new Error("No field can be empty.");
  }

  return {
    validInput: input.toLowerCase(),
    validKey: key.toLowerCase().trim(),
  };
};

/**
 * @example
 * const cipherText = process(plainText, key, true)
 */
const process = (input: string, key: string, encode: boolean): string => {
  const { validInput, validKey } = inputValidator(input, key);

  let output = "";

  for (let i = 0; i < validInput.length; ++i) {
    const inputIndex = LETTERS.indexOf(validInput[i]);

    if (inputIndex === -1) {
      output += inputIndex;
      continue;
    }

    const keyIndex = LETTERS.indexOf(validKey[i % validKey.length]);

    const calc = encode
      ? inputIndex + keyIndex
      : inputIndex - keyIndex + LETTERS.length;

    output += LETTERS[calc % LETTERS.length];
  }

  return output;
};

/**
 * @example
 * const cipherText = encode("example", "key")
 */
const encode = (plainText: string, key: string): string => {
  return process(plainText, key, true);
};

/**
 * @example
 * const plainText = decode("oshfkan", "key")
 */
const decode = (cipherText: string, key: string): string => {
  return process(cipherText, key, false);
};

export default { encode, decode };
