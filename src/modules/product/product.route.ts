import express from "express";
import {
  createAProduct,
  getAllProducts,
  getAProduct,
} from "./product.controller";

const productRouter = express.Router();

productRouter.post("/", createAProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:productId", getAProduct);

export default productRouter;
