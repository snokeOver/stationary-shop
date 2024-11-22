import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

//Create a product data in the MongoDB
export const createProductDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  const { isDeleted, __v, ...restResult } = result.toObject();
  void isDeleted; // To avoid unused variable warning
  void __v; // To avoid unused variable warning
  return restResult;
};

//Get all products from the database
export const getAllProductsDB = async () => {
  const result = await ProductModel.find().notDeleted();
  // const query = ProductModel.find().notDeleted();
  // console.log(query.getQuery());
  return result;
};
