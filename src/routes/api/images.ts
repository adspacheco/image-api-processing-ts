import express from 'express';

const images = express.Router();

images.get('/', (req, res) => {
  res.send('Image Change Name');
});

export default images;
