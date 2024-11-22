import {
  HydratedDocument,
  Model,
  QueryWithHelpers,
  Schema,
  model,
} from "mongoose";
import {
  IProduct,
  IProductNotDeletedQH,
  TProductModel,
} from "./product.interface";

const productSchema = new Schema<
  IProduct,
  Model<IProduct, IProductNotDeletedQH>,
  Record<string, never>,
  IProductNotDeletedQH
>(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      validate: {
        validator: (value) => /^[A-Z][a-zA-Z\s]*$/.test(value),
        message:
          "Product name must start with an uppercase letter and contain only alphabetic characters",
      },
      unique: true,
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
      min: [0, "Price must be a positive number"],
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
      min: [0, "Quantity must be a positive number"],
    },

    inStock: {
      type: Boolean,
      required: [true, "In-stock status is required"],
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },

  // Adds `createdAt` and `updatedAt` fields automatically
  {
    timestamps: true,
  }
);

//Custom querry to get only the non-deleted product
productSchema.query.notDeleted = function byName(
  this: QueryWithHelpers<
    HydratedDocument<IProduct>,
    HydratedDocument<IProduct>,
    IProductNotDeletedQH
  >
) {
  return this.find({ isDeleted: false });
};

export const ProductModel = model<IProduct, TProductModel>(
  "products",
  productSchema
);
