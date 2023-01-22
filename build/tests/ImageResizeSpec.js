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
Object.defineProperty(exports, "__esModule", { value: true });
const ImageResize_1 = require("../modules/ImageResize");
let InputImage = './src/assets/Images/img.jpg';
let OutputImage = './src/assets/Thumb/output.jpg';
describe('Image Module ', () => {
    it('test Resize 1', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log(__dirname + '/t');
        expect(yield (0, ImageResize_1.ImageResize)(InputImage, 100, 100, OutputImage)).toBe(true);
    }));
});
