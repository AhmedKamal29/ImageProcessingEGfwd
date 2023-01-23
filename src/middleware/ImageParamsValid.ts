import express from 'express';

const ValidateParams = (
  ImageName: string,
  ImageWidth: number,
  ImageHeight: number
): boolean => {
  const isEmptyString = (str: string): boolean => {
    return typeof str === 'string' && str.trim().length == 0;
  };
  const isNumber = (num: number): boolean => {
    return typeof num === 'number' && !isNaN(num);
  };

  if (
    isEmptyString(ImageName) ||
    !isNumber(ImageWidth) ||
    !isNumber(ImageHeight)
  ) {
    return false;
  } else if (ImageWidth <= 50 || ImageHeight <= 50) {
    return false;
  } else return true;
};

const ExecuteMiddleware = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  try {
    const ImageName: string = String(req.query.name);
    const ImageWidth: number = Number(req.query.width);
    const ImageHeight: number = Number(req.query.height);

    if (ValidateParams(ImageName, ImageWidth, ImageHeight)) {
      res.status(200);
      next();
    } else {
      res.status(401);
      res.send(
        '<h2 style="text-align:center; margin:5%"> You need to enter query paramters for the image name and the requied size 🤷🏻‍♂️ !!</h2>'
      );
    }
  } catch (e) {
    res.send(
      '<h2 style="text-align:center; margin:5%">There might be a problem in the params you</h2>'
    );
  }
};

export { ExecuteMiddleware };
