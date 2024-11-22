import { NotFoundError } from "../../errorhandler";
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
  const result = await ProductModel.find()
    .notDeleted()
    .select("-isDeleted -__v");
  // const query = ProductModel.find().notDeleted();
  // console.log(query.getQuery());
  if (result.length < 1) throw new NotFoundError("Resource not found");
  return result;
};

//Get a single product from the database
export const getAProductDB = async (productId: string) => {
  const result = await ProductModel.findById(productId)
    .notDeleted()
    .select("-isDeleted -__v");

  if (result.length < 1) throw new NotFoundError("Resource not found");

  return result;
};

//Update a single product from the database
export const updateAProductDB = async (
  productId: string,
  updatedContent: Partial<IProduct>
) => {
  const result = await ProductModel.findOneAndUpdate(
    { _id: productId, isDeleted: false },
    { $set: updatedContent },
    { runValidators: true, new: true }
  );

  if (!result) throw new NotFoundError("Resource not found");

  return result;
};
