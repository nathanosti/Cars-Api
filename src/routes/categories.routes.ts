import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();

const categories = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { title, name, description } = request.body;

  const CategoryAlreadyExist = categories.findCategoryByName(name);

  if (CategoryAlreadyExist)
    return response
      .status(405)
      .json({ msg: "Categories Already Exists" })
      .send();

  categories.create({ title, name, description });

  return response
    .status(201)
    .json({ msg: "Category created successfully!", categories })
    .send();
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categories.listAll();

  response
    .status(200)
    .json({ msg: "All categories successfully listed!", allCategories })
    .send();
});

export { categoriesRoutes };
