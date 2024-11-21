import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

//Create a product data in the MongoDB
export const createProductDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};
