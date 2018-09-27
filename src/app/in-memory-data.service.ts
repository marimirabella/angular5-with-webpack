import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ItemModel } from './list/item.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items: ItemModel[] = [
      new ItemModel(0, 'Item 1'),
      new ItemModel(1, 'Item 2'),
      new ItemModel(2, 'Item 3'),
      new ItemModel(3, 'Item 4'),
      new ItemModel(4, 'Item 5'),
      new ItemModel(5, 'Item 6'),
      new ItemModel(6, 'Item 7'),
      new ItemModel(7, 'Item 8'),
      new ItemModel(8, 'Item 9'),
      new ItemModel(9, 'Item 10')
    ];
    return {items};
  }
}