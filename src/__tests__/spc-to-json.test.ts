import fs from 'fs';
import { join } from 'path';

import { convertSpcToJson } from '../spc-to-json';

test('SPC to JSON conversion', () => {
  const inputPath = join(__dirname, 'data/spectrum.spc');
  const outputPath = join(__dirname, 'data/spectrum.json');

  if (fs.existsSync(outputPath)) {
    fs.unlinkSync(outputPath);
  }

  convertSpcToJson(inputPath, outputPath);
  expect(fs.existsSync(outputPath)).toBe(true);
});
