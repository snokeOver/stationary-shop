import express from "express";
import { createAProduct, getAllProducts } from "./product.controller";

const productRouter = express.Router();

productRouter.post("/", createAProduct);
productRouter.get("/", getAllProducts);

export default productRouter;
