import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";

//Create a order and save to MongoDB
export const createAOrderDB = async (order: IOrder) => {
  const result = await OrderModel.create(order);
  const { __v, ...restResult } = result.toObject();
  void __v;

  return restResult;
};
