
import { EventEmitter } from '@angular/core';

import { ItemModel } from './item.model';
import { Subject } from 'rxjs';

export class ListService {
  // startedEditing = new Subject<boolean>();
  // startedEditing = new EventEmitter<number>();

  private list: ItemModel[] = [
    new ItemModel('Item1'),
    new ItemModel('Item2'),
    new ItemModel('Item3')
  ]

  getItems(): ItemModel[] {
    return [... this.list];
  }

  getItem(index: number) {
    return this.list[index];
  }

}