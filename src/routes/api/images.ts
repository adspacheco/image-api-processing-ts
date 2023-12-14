import express from 'express';
import path from 'path';
import sharp from 'sharp';
import fs from 'fs';

const images = express.Router();

images.get('/', async (req, res) => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  if (!filename) {
    res.status(400).send('Image not found!');
  }

  if (!width || !height || isNaN(width) || isNaN(height)) {
    return res.status(400).send('Image dimensions not found or invalid!');
  }

  const originalImagePath = path.resolve(
    __dirname,
    '../../../src/assets',
    filename + '.jpg'
  );

  const thumbFolderPath = path.resolve(__dirname, '../../images');
  const thumbImagePath = path.join(thumbFolderPath, `${filename}.jpg`);

  if (!fs.existsSync(thumbFolderPath)) {
    fs.mkdirSync(thumbFolderPath, { recursive: true });
  }

  try {
    await sharp(originalImagePath).resize(width, height).toFile(thumbImagePath);

    res.sendFile(thumbImagePath, (err) => {
      if (err) {
        res.status(404).send('Error while creating thumbnail');
      }
    });
  } catch (error) {
    console.warn(error);
    res.status(500).send('Error processing image');
  }
});

export default images;
