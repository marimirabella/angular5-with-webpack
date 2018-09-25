import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ItemModel } from './item.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
  private itemsUrl = 'api/items';

  constructor(private http: HttpClient){}

  getItems(): Observable<ItemModel[]> {
    return this.http.get<ItemModel[]>(this.itemsUrl);
  }

  getItem(id: number): Observable<ItemModel> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<ItemModel>(url);
  }

  updateItem(changedItem: ItemModel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(this.itemsUrl, changedItem, httpOptions);
  }

  addItem(newItem: ItemModel): Observable<ItemModel> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<ItemModel>(this.itemsUrl, newItem, httpOptions);
  }


  // private list: ItemModel[] = [
  //   new ItemModel('Item 1'),
  //   new ItemModel('Item 2'),
  //   new ItemModel('Item 3')
  // ];

  // getItems(): ItemModel[] {
  //   return [... this.list];
  // }

  // getItem(id: number) {
    // return this.list[id];
  // }

  // updateItem(index: number, changedItem: ItemModel) {
  //   this.list = this.list.map((item, i) => index === i ? changedItem : item);
  // }

  // addItem(newItem: ItemModel) {
  //   this.list = [...this.list, newItem];
  // }
}