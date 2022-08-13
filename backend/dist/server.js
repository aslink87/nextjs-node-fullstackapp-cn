"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
const express_1 = __importDefault(require("express"));
const dotenv = require('dotenv');
dotenv.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server Hello Mom');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
//# sourceMappingURL=server.js.map