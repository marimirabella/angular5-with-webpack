
import { ItemModel } from './item.model';

export class ListService {
  private list: ItemModel[] = [
    new ItemModel('Item 1'),
    new ItemModel('Item 2'),
    new ItemModel('Item 3')
  ]

  getItems(): ItemModel[] {
    return [... this.list];
  }

  getItem(index: number) {
    return this.list[index];
  }

  updateItem(index: number, changedItem: ItemModel) {
    this.list = this.list.map((item, i) => index === i ? changedItem : item);
  }

  addItem(newItem: ItemModel) {
    this.list = [...this.list, newItem];
  }
}