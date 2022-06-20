import { Specification } from "../../model/Specification";
import { ICreateSpecification, ICreateSpecificationResponse } from "../../utils/interfaces";

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecification): ICreateSpecificationResponse;
  findByName(name: string): Specification | undefined;
}

export { ISpecificationsRepository };
