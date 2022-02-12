import { Router } from "express";
import * as controller from "../controllers/index";

export const index = Router();
export const api = Router();

index.get("/", controller.index);
api.get("/movies", controller.movies);
