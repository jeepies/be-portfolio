"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const server = app_1.default.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 9090);
exports.default = server;
//# sourceMappingURL=server.js.map