import { Category } from "../../model/Category";
import { ICreateCategory } from "../../utils/interfaces";
import { ICategoriesRepository } from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, title, description }: ICreateCategory) {
    const category: Category = new Category();

    Object.assign(category, {
      name,
      title,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  listAll() {
    return this.categories;
  }

  findCategoryByName(name: string) {
    const CategoryAlreadyExist: Category | undefined = this.categories.find(
      (category) => category.name === name
    );

    return CategoryAlreadyExist;
  }
}

export { CategoriesRepository };
