export interface Item {
  id: number;
  name: string;
}

export class ItemModel implements Item {
  public id: number;
  public name: string;

  constructor (id?: number, name?: string) {
    this.id = id;
    this.name = name || '';
  }
}