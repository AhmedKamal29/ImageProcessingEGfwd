import MainDir from '../index';
import fs from 'fs';

const FindImageInCach = (
  ImageName: string,
  ImageWidth: number,
  ImageHeight: number
): boolean => {
  const Imagepath =
    MainDir.__dirname +
    `/images/Thumb/${ImageName}_${ImageWidth}_${ImageHeight}.jpg`;
  if (fs.existsSync(Imagepath)) {
    return true;
  } else {
    return false;
  }
};

export { FindImageInCach };
