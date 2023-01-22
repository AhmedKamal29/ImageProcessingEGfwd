import express, { Request, Response } from 'express';
import sharp from 'sharp';
import absPath from '../../index';
import { FindImageInCach as search } from '../../modules/FindImage';
const imageProcess = express.Router();

let inputFile = './src/images/input/img.jpg';
let outputFile = './src/images/Thumb/output.jpg';

imageProcess.get(
  '/resize',
  async (req: Request, res: Response): Promise<void> => {
    if (
      !search(
        String(req.query.name),
        Number(req.query.width),
        Number(req.query.height)
      )
    ) {
      inputFile = `./src/images/input/${String(req.query.name)}.jpg`;
      outputFile = `./src/images/Thumb/${String(req.query.name)}_${
        req.query.width
      }_${req.query.height}.jpg`;
      // try {

      const data = await resize(
        Number(req.query.width),
        Number(req.query.height),
        inputFile
      );
      if (!data) {
        res.send(' Error image not found');
        return;
      }
      res.sendFile(
        absPath.__dirname +
          `/images/Thumb/${String(req.query.name)}_${req.query.width}_${
            req.query.height
          }.jpg`
      );
    } else {
      res.sendFile(
        absPath.__dirname +
          `/images/Thumb/${String(req.query.name)}_${req.query.width}_${
            req.query.height
          }.jpg`
      );
    }
  }
);

const resize = async (
  width: number,
  height: number,
  inputFile1: string
): Promise<boolean> => {
  try {
    await sharp(inputFile1)
      .resize({ height: height, width: width })
      .toFile(outputFile);
  } catch (err) {
    return false;
  }
  return true;
};

export default { imageProcess, resize, absPath };
