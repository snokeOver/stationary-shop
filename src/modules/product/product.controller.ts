import { NextFunction, Request, Response } from "express";
import { createProductDB } from "./product.service";

// Control request and response to Create A Product
export const createAProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = req.body;
    const result = await createProductDB(product);

    res.status(200).send({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
