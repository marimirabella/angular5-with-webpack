import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ListService } from './list.service';
import { ItemModel } from './item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: ItemModel[];

  constructor(private listService: ListService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    // this.list = this.listService.getItems();
    this.getItems();
  }

  getItems(): void {
    this.listService.getItems()
      .subscribe( items => {
        this.list = items;
      });
  }

  goToEditMode(item: ItemModel) {
    this.router.navigate(['/item', item.id, 'edit'], {relativeTo: this.route});
  }
}