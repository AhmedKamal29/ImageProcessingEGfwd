"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteMiddleware = void 0;
const ValidateParams = (ImageName, ImageWidth, ImageHeight) => {
    const isEmptyString = (str) => typeof str === 'string' && str.trim().length == 0;
    const isNumber = (num) => typeof num === 'number' && !isNaN(num);
    if (isEmptyString(ImageName) ||
        !isNumber(ImageWidth) ||
        !isNumber(ImageHeight)) {
        return false;
    }
    else if (ImageWidth <= 50 || ImageHeight <= 50) {
        return false;
    }
    else
        return true;
};
const ExecuteMiddleware = (req, res, next) => {
    try {
        let ImageName = String(req.query.name);
        let ImageWidth = Number(req.query.width);
        let ImageHeight = Number(req.query.height);
        if (ValidateParams(ImageName, ImageWidth, ImageHeight)) {
            next();
        }
        else {
            res.send('<h2 style="text-align:center; margin:5%"> You need to enter query paramters for the image name and the requied size 🤷🏻‍♂️ !!</h2>');
        }
    }
    catch (e) {
        res.send('<h2 style="text-align:center; margin:5%">There might be a problem in the params you</h2>');
    }
};
exports.ExecuteMiddleware = ExecuteMiddleware;
