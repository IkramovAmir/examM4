import { Router } from "express";
import cartController from "../controller/cart.controller.js";

export const cartRouter = Router();

cartRouter.post("/cart", cartController.ADDED);
