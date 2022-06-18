import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/Category/CreateCategory";

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { title, name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ title, name, description });

  return response
    .status(201)
    .json({ msg: "Category created successfully!" })
    .send();
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepository.listAll();

  response
    .status(200)
    .json({ msg: "All categories successfully listed!", allCategories })
    .send();
});

export { categoriesRoutes };
