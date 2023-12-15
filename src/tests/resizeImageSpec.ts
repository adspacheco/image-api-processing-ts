import path from 'path';
import resizeImage from '../utils/resizeImage';
import fs from 'fs';

describe('Image Resizer', () => {
  const filename = 'fjord';
  const width = 200;
  const height = 200;

  const originalImagePath = path.resolve(
    __dirname,
    '../../src/assets',
    filename + '.jpg'
  );

  const thumbFolderPath = path.resolve(__dirname, '../../dist/images');

  const thumbImagePath = path.join(
    thumbFolderPath,
    `${filename}_${width}_${height}.jpg`
  );

  it('should create resized image', async () => {
    // Remove "cache"
    if (fs.existsSync(thumbImagePath)) {
      fs.unlinkSync(thumbImagePath);
    }

    expect(fs.existsSync(thumbImagePath)).toBe(false);

    await resizeImage(originalImagePath, width, height, thumbImagePath);

    expect(fs.existsSync(thumbImagePath)).toBe(true);
  });
});
