"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const FindImage_1 = require("../../modules/FindImage");
const ImageResize_1 = require("../../modules/ImageResize");
const ImageParamsValid_1 = require("../../middleware/ImageParamsValid");
const index_1 = __importDefault(require("../../index"));
const ImageProcessing = express_1.default.Router();
ImageProcessing.get('/resize', ImageParamsValid_1.ExecuteMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let ImageName = String(req.query.name);
        let ImageWidth = Number(req.query.width);
        let ImageHeight = Number(req.query.height);
        if (!(0, FindImage_1.FindImageInCach)(ImageName, ImageWidth, ImageHeight)) {
            let InputImage = `./src/assets/Images/${ImageName}.jpg`;
            let OutputImage = `./src/assets/Thumb/${ImageName}_${ImageWidth}_${ImageHeight}.jpg`;
            const ResizedImage = yield (0, ImageResize_1.ImageResize)(InputImage, ImageWidth, ImageHeight, OutputImage);
            if (!ResizedImage) {
                res.send('Opps seems like this image is not there 🫢');
                return;
            }
            res.sendFile(index_1.default.__dirname +
                `/assets/Thumb/${ImageName}_${ImageWidth}_${ImageHeight}.jpg`);
        }
        else {
            res.sendFile(index_1.default.__dirname +
                `/assets/Thumb/${ImageName}_${ImageWidth}_${ImageHeight}.jpg`);
        }
    }
    catch (e) {
        res.send('<h2 style="text-align:center; margin:5%"> You need to enter query paramters for the image name and the requied size 🤷🏻‍♂️ !!</h2>');
    }
}));
exports.default = ImageProcessing;
