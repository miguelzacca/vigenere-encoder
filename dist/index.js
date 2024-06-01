"use strict";
const LETTERS = "abcdefghijklmnopqrstuvwxyz";
/**
 * @example
 * inputValidator(input, key)
 * @throws
 */
const inputValidator = (input, key) => {
    if (!input || !key) {
        throw new Error("No field can be empty.");
    }
    return {
        validInput: input.toLowerCase().trim(),
        validKey: key.toLowerCase().split(" ").join("").trim(),
    };
};
/**
 * @example
 * const cipherText = process(plainText, key, true)
 */
const process = (input, key, encode) => {
    const { validInput, validKey } = inputValidator(input, key);
    let output = "";
    for (let i = 0; i < validInput.length; ++i) {
        const inputIndex = LETTERS.indexOf(validInput[i]);
        if (inputIndex === -1) {
            output += validInput[i];
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
const encode = (plainText, key) => {
    return process(plainText, key, true);
};
/**
 * @example
 * const plainText = decode("oshfkan", "key")
 */
const decode = (cipherText, key) => {
    return process(cipherText, key, false);
};
export default { encode, decode };
