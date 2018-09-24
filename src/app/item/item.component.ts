import { Component, OnInit, ViewChild, OnDestroy, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { ListService } from './../list/list.service';
import { Item, ItemModel } from './../list/item.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {
  model: ItemModel;
  id: number;
  editMode: boolean;
  subscription: Subscription;
  @ViewChild('f') itemForm: NgForm;

  constructor(private listService: ListService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe(
        (params) => {
          this.id = +params['id'];
          if (this.id === this.id) {
            this.model = this.listService.getItem(this.id);
            this.editMode = true;
          } else {
            this.model = { name: '' };
            this.editMode = false;
          }
        }
      );
  }

  onSubmit() {
    console.log(this.itemForm);
    const value = this.itemForm.value;
    const newItem = new ItemModel(value.name);
    this.editMode
      ? this.listService.updateItem(this.id, newItem)
      : this.listService.addItem(newItem);
    this.itemForm.reset();
    this.router.navigate(['/'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}