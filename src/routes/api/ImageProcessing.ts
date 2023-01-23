import express from 'express';
import { FindImageInCach as search } from '../../modules/FindImage';
import { ImageResize as resize } from '../../modules/ImageResize';
import { ExecuteMiddleware as validate } from '../../middleware/ImageParamsValid';
import MainDir from '../../index';

const ImageProcessing = express.Router();

ImageProcessing.get(
  '/resize',
  validate,
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      let ImageName: string = String(req.query.name);
      let ImageWidth: number = Number(req.query.width);
      let ImageHeight: number = Number(req.query.height);

      if (!search(ImageName, ImageWidth, ImageHeight)) {
        let InputImage = `./src/assets/Images/${ImageName}.jpg`;
        let OutputImage = `./src/assets/Thumb/${ImageName}_${ImageWidth}_${ImageHeight}.jpg`;

        const ResizedImage = await resize(
          InputImage,
          ImageWidth,
          ImageHeight,
          OutputImage
        );

        if (!ResizedImage) {
          res.send('Opps seems like this image is not there 🫢');
          return;
        }

        res.sendFile(
          MainDir.__dirname +
            `/assets/Thumb/${ImageName}_${ImageWidth}_${ImageHeight}.jpg`
        );
      } else {
        res.sendFile(
          MainDir.__dirname +
            `/assets/Thumb/${ImageName}_${ImageWidth}_${ImageHeight}.jpg`
        );
      }
    } catch (e) {
      res.send(
        '<h2 style="text-align:center; margin:5%"> You need to enter query paramters for the image name and the requied size 🤷🏻‍♂️ !!</h2>'
      );
    }
  }
);

export default ImageProcessing;
