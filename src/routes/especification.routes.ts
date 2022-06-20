import { Router } from "express";
import { SpecificationsRepository } from "../repositories/SpecificationsRepository/SpecificationsRepository";
import { CreateSpecificationService } from "../services/Specification/CreateSpecification";

const especificationRoutes = Router();

const specificationRepository = new SpecificationsRepository();

//Route to create a new Especification
especificationRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const specificationService = new CreateSpecificationService(
    specificationRepository
  );

  const CreateSpecification = specificationService.execute({
    name,
    description,
  });

  return response.status(201).json({ CreateSpecification }).send();
});

export { especificationRoutes };
