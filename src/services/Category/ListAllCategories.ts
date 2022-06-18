import { CategoriesRepository } from "../../repositories/CategoriesRepository";

class ListAllCategories {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute() {
    const allCategories = this.categoriesRepository.listAll();

    return allCategories;
  }
}

export { ListAllCategories };
