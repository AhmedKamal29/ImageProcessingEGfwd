import express, { Request, Response } from 'express';
// import sharp from 'sharp';
import MainDir from '../../index';
import { FindImageInCach as search } from '../../modules/FindImage';
import { ImageResize as resize } from '../../modules/ImageResize';
const ImageProcessing = express.Router();

let InputImage = './src/images/Images/img.jpg';
let OutputImage = './src/images/Thumb/output.jpg';

ImageProcessing.get(
  '/resize',
  async (req: Request, res: Response): Promise<void> => {
    if (
      !search(
        String(req.query.name),
        Number(req.query.width),
        Number(req.query.height)
      )
    ) {
      InputImage = `./src/images/Images/${String(req.query.name)}.jpg`;
      OutputImage = `./src/images/Thumb/${String(req.query.name)}_${
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
          `/images/Thumb/${String(req.query.name)}_${req.query.width}_${
            req.query.height
          }.jpg`
      );
    } else {
      res.sendFile(
        MainDir.__dirname +
          `/images/Thumb/${String(req.query.name)}_${req.query.width}_${
            req.query.height
          }.jpg`
      );
    }
  }
);

export default ImageProcessing;
