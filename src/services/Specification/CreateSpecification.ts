import { ISpecificationsRepository } from "../../repositories/SpecificationsRepository/ISpecificationsRepository";
import {
  ICreateSpecification,
  ICreateSpecificationResponse,
} from "../../utils/interfaces";

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({
    name,
    description,
  }: ICreateSpecification): ICreateSpecificationResponse {
    const reqBody = { name, description };

    const specificationAlreadyExist =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExist)
      throw new Error("Specification already Exist");

    return this.specificationsRepository.create(reqBody);
  }
}

export { CreateSpecificationService };
