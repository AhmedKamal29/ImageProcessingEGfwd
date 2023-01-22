"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindImageInCach = void 0;
const index_1 = __importDefault(require("../index"));
const fs_1 = __importDefault(require("fs"));
const FindImageInCach = (ImageName, ImageWidth, ImageHeight) => {
    const Imagepath = index_1.default.__dirname +
        `/images/Thumb/${ImageName}_${ImageWidth}_${ImageHeight}.jpg`;
    if (fs_1.default.existsSync(Imagepath)) {
        return true;
    }
    else {
        return false;
    }
};
exports.FindImageInCach = FindImageInCach;
