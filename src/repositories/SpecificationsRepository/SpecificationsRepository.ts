import { Specification } from "../../model/Specification";
import { ICreateSpecificationResponse } from "../../utils/interfaces";
import { ISpecificationsRepository } from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: Specification): ICreateSpecificationResponse {
    const newSpecification: Specification = new Specification();

    Object.assign(newSpecification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(newSpecification);

    const response = {
      msg: "Specification created successfully",
      newSpecification,
      retCode: 1,
    };

    return response;
  }

  findByName(name: string) {
    const specificationAlreadyExist: Specification | undefined =
      this.specifications.find((specification) => specification.name === name);

    return specificationAlreadyExist;
  }
}

export { SpecificationsRepository };
