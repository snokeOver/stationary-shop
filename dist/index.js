"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDB_Url = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
//Initialize dotenv variables access
dotenv_1.default.config();
const server_port = process.env.SERVER_PORT;
exports.mongoDB_Url = process.env.MONGODB_URL;
//Connect MongoDB via Mongoose
//Initialize app
const app = (0, express_1.default)();
//Primary middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Application routes
app.get("/", (req, res) => {
    res.status(200).send("Hello from stationary shop");
});
app.listen(server_port, () => [
    console.log(`Stationary shop is listening on port ${server_port}`),
]);
