"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = index;
const package_json_1 = __importDefault(require("../../package.json")); // is this technically allowed? who knows.
function index(request, response) {
    response.status(200).json({
        success: true,
        data: {
            version: package_json_1.default.version
        }
    });
}
//# sourceMappingURL=root.js.map