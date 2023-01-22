import express from 'express';
import { FindImageInCach as search } from '../../modules/FindImage';
import { ImageResize as resize } from '../../modules/ImageResize';
import MainDir from '../../index';

const ImageProcessing = express.Router();

let InputImage = './src/assets/Images/img.jpg';
let OutputImage = './src/assets/Thumb/output.jpg';

ImageProcessing.get('/resize', async (req, res): Promise<void> => {
  if (
    !search(
      String(req.query.name),
      Number(req.query.width),
      Number(req.query.height)
    )
  ) {
    InputImage = `./src/assets/Images/${String(req.query.name)}.jpg`;
    OutputImage = `./src/assets/Thumb/${String(req.query.name)}_${
      req.query.width
    }_${req.query.height}.jpg`;

    const image = await resize(
      InputImage,
      Number(req.query.width),
      Number(req.query.height),
      OutputImage
    );
    if (!image) {
      res.send('Opps seems like this image is not there 🫢');
      return;
    }
    res.sendFile(
      MainDir.__dirname +
        `/assets/Thumb/${String(req.query.name)}_${req.query.width}_${
          req.query.height
        }.jpg`
    );
  } else {
    res.sendFile(
      MainDir.__dirname +
        `/assets/Thumb/${String(req.query.name)}_${req.query.width}_${
          req.query.height
        }.jpg`
    );
  }
});

export default ImageProcessing;
