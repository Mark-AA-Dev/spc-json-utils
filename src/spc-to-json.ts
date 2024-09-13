import { readFileSync, writeFileSync } from 'fs';
import { console } from 'inspector';

import { parse } from '@markaadev/better-spc-parser';

/**
 * Convert a .spc file to a .json file.
 * @param {string} inputFilePath - The path to the .spc file.
 * @param {string} outputFilePath - The path where the .json file will be saved.
 */
export function convertSpcToJson(
  inputFilePath: string,
  outputFilePath: string,
) {
  try {
    const arrayBuffer = readFileSync(inputFilePath);
    const result = parse(arrayBuffer);
    const jsonResult = JSON.stringify(result, null, 2);

    writeFileSync(outputFilePath, jsonResult, 'utf8');
    log(`Conversion successful! JSON saved to ${outputFilePath}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      logError(`Error during conversion: ${error.message}`);
    } else {
      logError('An unknown error occurred during conversion');
    }
  }
}

/**
 * Simple logger utility
 */
function log(message: string) {
  console.log(message);
}

function logError(message: string) {
  console.error(message);
}
