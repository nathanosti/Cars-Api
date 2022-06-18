import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ICreateCategory } from "../../utils/interfaces";

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ title, name, description }: ICreateCategory): void {
    const CategoryAlreadyExist =
      this.categoriesRepository.findCategoryByName(name);

    if (CategoryAlreadyExist) throw new Error("Categories already exists");

    this.categoriesRepository.create({ title, name, description });
  }
}

export { CreateCategoryService };
