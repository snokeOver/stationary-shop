import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDB } from "./server";
import productRouter from "./modules/product/product.route";

//Initialize dotenv variables access
dotenv.config();
const server_port = process.env.SERVER_PORT;
export const mongoDB_Url = process.env.MONGODB_URL;

//Connect MongoDB via Mongoose
connectToDB();

//Initialize app
const app = express();

//Primary middlewares
app.use(express.json());
app.use(cors());

// Application routes

app.use("/api/products", productRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello from stationary shop");
});

app.listen(server_port, () => [
  console.log(`Stationary shop is listening on port ${server_port}`),
]);
