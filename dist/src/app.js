"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
Object.entries(routes_1.default).forEach(([route, handlers]) => {
    if (route === 'root')
        route = '';
    app.use(`/${route}`, handlers);
});
exports.default = app;
//# sourceMappingURL=app.js.map