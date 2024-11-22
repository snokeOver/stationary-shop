import mongoose, { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, "Customer email is required"],
      trim: true,
      lowercase: true,
      validate: {
        validator: (value) =>
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value),
        message: "Invalid email format",
      },
      unique: true,
    },

    product: {
      type: Schema.Types.ObjectId,
      ref: "products",
      trim: true,
      required: true,
      validate: {
        validator: mongoose.Types.ObjectId.isValid,
        message: "Invalid product ID",
      },
    },

    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
      min: [1, "Quantity should be at least 1"],
    },

    totalPrice: {
      type: Number,
      required: [true, "Total price is required"],
      validate: {
        validator: (value: number) => value > 0,
        message: "Invalid Total price",
      },
    },
  },

  {
    timestamps: true,
  }
);

export const OrderModel = model<IOrder>("orders", orderSchema);
