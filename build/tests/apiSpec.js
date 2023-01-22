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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default.app);
const status = 200;
describe('Testing the server response', () => {
    it('get the response of /api', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api');
        expect(response.status).toBe(status);
    }));
    it('get the response of api/resize', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/resize');
        expect(response.status).toBe(401);
    }));
});
describe('Testing ImageProcessing endpoint responses based on several inputs', () => {
    it('testing validate name', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/resize?name=&width=200&height=200');
        expect(response.status).toBe(401);
    }));
    it('test validate params width', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/resize?name=pic&width=10&height=200');
        expect(response.status).toBe(401);
    }));
    it('tesing validate params height', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/resize?name=pic&width=1050&height=0');
        expect(response.status).toBe(401);
    }));
    it('testing all params validation', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/resize?name=&width=&height=');
        expect(response.status).toBe(401);
    }));
    it('test validate params pass', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/resize?name=palmtunnel&width=500&height=1000');
        expect(response.status).toBe(status);
    }));
});
