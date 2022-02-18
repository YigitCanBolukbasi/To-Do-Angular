import { todoItem } from './todoItem';

export class Model {
  items: todoItem[];
  constructor() {
    this.items = [];
  }
}
