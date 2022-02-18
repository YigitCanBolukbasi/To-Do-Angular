export class todoItem {
  description: string;
  action: boolean;

  constructor(description: string, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
