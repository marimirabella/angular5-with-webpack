export interface Item {
  name: string;
}

export class ItemModel implements Item {
  public name: string;

  constructor (name?: string) {
    this.name = name || '';
  }
}