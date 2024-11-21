import { Request, Response } from "express";
import { createProductDB } from "./product.service";

// Control request and response to Create A Product
export const createAProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await createProductDB(product);

    res.status(200).send({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: (error as Error).message || "Server error",
      error: error,
    });
  }
};
