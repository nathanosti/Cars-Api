import { Category } from "../../model/Category";
import { ICreateCategory } from "../../utils/interfaces";

interface ICategoriesRepository {
  create({ name, title, description }: ICreateCategory): void;
  listAll(): Category[];
  findCategoryByName(name: string): Category | undefined;
}

export { ICategoriesRepository };
