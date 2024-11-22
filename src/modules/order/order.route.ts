import express from "express";
import { createAOrder } from "./order.controller";

const orderRoute = express.Router();

orderRoute.post("/", createAOrder);

export default orderRoute;
