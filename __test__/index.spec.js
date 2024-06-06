"use strict";

import v from "../dist/index";
import { describe, test, expect } from "@jest/globals";

describe("vigenere-encoder", () => {
  test("encode", () => {
    const plainText = " Test /";
    const key = "S cript ";
    expect(v.encode(plainText, key)).toEqual("lgjb /");
  });

  test("decode", () => {
    const cipherText = "lgjb /";
    const key = "S cript ";
    expect(v.decode(cipherText, key)).toEqual("test /");
  });
});
