import { ErrorRequestHandler } from "express";
import { Error } from "mongoose";

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let errMsg = "Server error";
  let statusCode = 500;
  let errorDetails = error.errors;

  //Check for specific error
  if (error instanceof Error.ValidationError) {
    errMsg = "Validation failed";
    statusCode = 400;
  } else if (error.code === 11000) {
    errorDetails = error.errorResponse;
    errMsg = `Duplicate value for field: ${Object.keys(error.keyValue)[0]}`;
    statusCode = 409;
  } else {
    errMsg = error.message || "Server error";
  }

  const response = {
    message: errMsg,
    success: false,
    error: {
      name: error.name || "UnknownError",
      errors: errorDetails,
    },

    stack: error.stack,
  };

  res.status(statusCode).send(response);
};
