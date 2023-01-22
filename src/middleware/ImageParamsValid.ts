import express from 'express';

const ValidateParams = (
  ImageName: string,
  ImageWidth: number,
  ImageHeight: number
): boolean => {
  const isEmptyString = (str: string): boolean =>
    typeof str === 'string' && str.trim().length == 0;
  const isNumber = (num: number): boolean =>
    typeof num === 'number' && !isNaN(num);

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
    let ImageName: string = String(req.query.name);
    let ImageWidth: number = Number(req.query.width);
    let ImageHeight: number = Number(req.query.height);

    if (ValidateParams(ImageName, ImageWidth, ImageHeight)) {
      next();
    } else {
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
