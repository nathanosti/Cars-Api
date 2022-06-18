import { Category } from "../model/Category";
import { ICreateCategory } from "../utils/interfaces";

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, title, description }: ICreateCategory) {
    const CategoriesAlreadyExist = this.categories.find(
      (category) => category.title
    );

    if (CategoriesAlreadyExist) throw new Error("Categories Already Exists");

    const category: Category = new Category();

    Object.assign(category, {
      name,
      title,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }
}

export { CategoriesRepository };
