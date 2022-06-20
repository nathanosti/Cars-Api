import { Specification } from "../model/Specification";

export interface ICreateCategory {
  name: string;
  title: string;
  description: string;
}

export interface ICreateSpecification {
  name: string;
  description: string;
}

export interface ICreateSpecificationResponse {
  msg: string;
  newSpecification: Specification;
  retCode: number;
}
