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
app.get("/api/", (req, res) => res.send("INDEX"));
// Error handling - Not sure if this works
app.use((err, req, res, next) => {
    console.log(err);
    const status = res.statusCode || 500;
    const message = err.message;
    const data = err.name;
    res.status(status).json({ message: message, data: data });
});
console.log("Environment is " + process.env.NODE_ENV);
app.listen(port, () => {
    console.log(`[server]: 🚀 Server is running at https://localhost:${port}`);
});
//# sourceMappingURL=server.js.map