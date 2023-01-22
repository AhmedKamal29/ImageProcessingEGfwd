"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ImageProcessing_1 = __importDefault(require("./api/ImageProcessing"));
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    res.send('<h2 style="text-align:center; margin:5%">Hello There 👋🏻 ! <br> To start Please add to the URL "/resize" followed by the query parameters </h2>');
});
routes.use('/', ImageProcessing_1.default);
exports.default = routes;
