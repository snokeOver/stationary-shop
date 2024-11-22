import express from "express";
import {
  createAProduct,
  getAllProducts,
  getAProduct,
  updateAProduct,
} from "./product.controller";

const productRouter = express.Router();

productRouter.post("/", createAProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:productId", getAProduct);
productRouter.put("/:productId", updateAProduct);

export default productRouter;
