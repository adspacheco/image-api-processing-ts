import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const resizeImage = async (
  originalImagePath: string,
  width: number,
  height: number,
  thumbImagePath: string
): Promise<void> => {
  if (!fs.existsSync(path.dirname(thumbImagePath))) {
    fs.mkdirSync(path.dirname(thumbImagePath), { recursive: true });
  }

  await sharp(originalImagePath).resize(width, height).toFile(thumbImagePath);
};

export default resizeImage;
