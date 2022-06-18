import { Category } from "../model/Category";
import { ICreateCategory } from "../utils/interfaces";

class CategoriesRepository {
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

    return this.categories;
  }

  listAll() {
    return this.categories;
  }

  findCategoryByName(name: string) {
    const CategoryAlreadyExist = this.categories.find(
      (category) => category.name === name
    );

    return CategoryAlreadyExist;
  }
}

export { CategoriesRepository };
