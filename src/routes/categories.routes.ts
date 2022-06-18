import { Router } from "express";
import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();

const categories = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { title, name, description } = request.body;

  categories.create({ title, name, description });

  return response.status(201).json({ categories }).send();
});

export { categoriesRoutes };
