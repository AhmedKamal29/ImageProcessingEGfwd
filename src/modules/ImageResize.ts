import sharp from 'sharp';

const ImageResize = async (
  ImgaeName: string,
  width: number,
  height: number,
  OutputFile: string
): Promise<boolean> => {
  await sharp(ImgaeName).resize({ width, height }).toFile(OutputFile);
  return true;
};

export { ImageResize };
