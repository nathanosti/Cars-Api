import { Router } from "express";

const categoriesRoutes = Router();

interface ICategories {
  name: string;
  description: string;
}

const categories: ICategories[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  categories.push({
    name,
    description,
  });

  return response.status(201).json(categories).send();
});

export { categoriesRoutes };
