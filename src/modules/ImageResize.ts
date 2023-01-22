import sharp from 'sharp';

const ImageResize = async (
  inputFile1: string,
  width: number,
  height: number,
  OutputFile: string
): Promise<boolean> => {
  await sharp(inputFile1).resize({ height, width }).toFile(OutputFile);
  return true;
};

export { ImageResize };
