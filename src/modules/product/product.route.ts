import express from "express";
import { createAProduct } from "./product.controller";

const productRouter = express.Router();

productRouter.post("", createAProduct);

export default productRouter;
