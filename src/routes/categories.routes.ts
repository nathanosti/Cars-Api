import { Router } from "express";
import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { title, name, description } = request.body;

  const category = new Category();
  Object.assign(category, {
    name,
    title,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return response.status(201).json({ categories }).send();
});

export { categoriesRoutes };
