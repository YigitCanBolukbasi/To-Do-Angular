import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  displayAll: boolean = true;

  constructor() {}

  model = new Model();

  addItem(value: string) {
    if (value != '') {
      this.model.items.push({ description: value, action: false });
    } else {
      alert('you did not write activity');
    }
  }

  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter((item) => item.action == false);
  }
}
