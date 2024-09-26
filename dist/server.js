"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the 'express' module along with 'Request' and 'Response' types from express
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const beepersRouter_1 = __importDefault(require("./routs/beepersRouter"));
dotenv_1.default.config();
// Create an Express application
const app = (0, express_1.default)();
// Specify the port number for the server
const port = process.env.PORT || 3009;
app.use(express_1.default.json());
app.use(beepersRouter_1.default);
// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});
