import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();

const categories = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { title, name, description } = request.body;

  categories.create({ title, name, description });

  return response.status(201).json({ categories }).send();
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categories.listAll();

  response.status(200).json({ allCategories }).send();
});

export { categoriesRoutes };
