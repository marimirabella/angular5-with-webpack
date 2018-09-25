import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ItemModel } from './list/item.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items: ItemModel[] = [
      new ItemModel(0, 'Item 1'),
      new ItemModel(1, 'Item 2'),
      new ItemModel(2, 'Item 3')
    ];
    return {items};
  }
}