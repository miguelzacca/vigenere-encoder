"use strict";

declare module "vigenere-encoder" {
  export function encode(input: string, key: string): string;
  export function decode(input: string, key: string): string;
}
