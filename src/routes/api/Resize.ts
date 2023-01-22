import express, { Request, Response } from 'express';
import sharp from 'sharp';
import absPath from '../../index';
import fs from 'fs';
const imageProcess = express.Router();

let inputFile = './src/images/input/img.jpg';
let outputFile = './src/images/output/output.jpg';

imageProcess.get(
  '/resize',
  async (req: Request, res: Response): Promise<void> => {
    if (
      !checkForPhotoExistence(
        String(req.query.name),
        Number(req.query.width),
        Number(req.query.height)
      )
    ) {
      inputFile = `./src/images/input/${String(req.query.name)}.jpg`;
      outputFile = `./src/images/output/${String(req.query.name)}_${
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
      // }catch(err){
      // 	res.send(" Error image not found");
      // 	return;
      // }

      // console.log(__dirname);
      res.statusCode = 200;
      res.sendFile(
        absPath.__dirname +
          `/images/output/${String(req.query.name)}_${req.query.width}_${
            req.query.height
          }.jpg`
      );
    } else {
      res.statusCode = 200;
      res.sendFile(
        absPath.__dirname +
          `/images/output/${String(req.query.name)}_${req.query.width}_${
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

function checkForPhotoExistence(
  name: string,
  width: number,
  height: number
): boolean {
  const path =
    absPath.__dirname + `/images/output/${name}_${width}_${height}.jpg`;
  try {
    if (fs.existsSync(path)) {
      console.log('found');
      return true;
    } else {
      console.log('notfound');
      return false;
    }
  } catch (error) {
    console.log('errpr !');
    return false;
  }
}

export default { imageProcess, resize, absPath };
// export default checkForPhotoExistence;
