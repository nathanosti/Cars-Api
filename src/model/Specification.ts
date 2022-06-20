import { v4 as uuid } from "uuid";

class Specification {
  id!: string;
  name!: string;
  description!: string;
  created_at!: Date;

  constructor() {
    if (!this.id) this.id === uuid();

    console.log(this.id);
  }
}

export { Specification };
