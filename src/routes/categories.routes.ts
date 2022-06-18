import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository/CategoriesRepository";
import { CreateCategoryService } from "../services/Category/CreateCategory";
import { ListAllCategories } from "../services/Category/ListAllCategories";

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
  const getAllCategories = new ListAllCategories(categoriesRepository);

  const allCategories = getAllCategories.execute();

  response
    .status(200)
    .json({ msg: "All categories successfully listed!", allCategories })
    .send();
});

export { categoriesRoutes };
