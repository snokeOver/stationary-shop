import { Schema, model } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      validate: {
        validator: (value) => value.charAt(0) === value.charAt(0).toUpperCase(),
        message: "The product name must start with an uppercase letter",
      },
    },

    brand: {
      type: String,
      required: [true, "Brand name is required"],
      trim: true,
      validate: {
        validator: (value) => value.charAt(0) === value.charAt(0).toUpperCase(),
        message: "The Brand name must start with an uppercase letter",
      },
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be greater than or equal to 0"],
    },

    category: {
      type: String,
      enum: {
        values: [
          "Writing",
          "Office Supplies",
          "Art Supplies",
          "Educational",
          "Technology",
        ],
        message: "{VALUE} is not a valid category",
      },
      required: [true, "Category is required"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },

    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [0, "Quantity must be greater than or equal to 0"],
    },

    inStock: {
      type: Boolean,
      required: [true, "In-stock status is required"],
    },
  },
  // Adds `createdAt` and `updatedAt` fields automatically
  {
    timestamps: true,
  }
);

export const ProductModel = model<IProduct>("products", productSchema);
