import MainDir from '../index';
import fs from 'fs';

const FindImageInCach = (
  name: string,
  width: number,
  height: number
): boolean => {
  const path =
    MainDir.__dirname + `/images/output/${name}_${width}_${height}.jpg`;
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
};

export { FindImageInCach };
