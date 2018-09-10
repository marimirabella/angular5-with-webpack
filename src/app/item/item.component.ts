import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
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
  currentItem: Item;
  model: ItemModel;
  editMode: boolean;
  subscription: Subscription;
  @ViewChild('f') itemForm: NgForm;

  constructor(private listService: ListService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.route.data
      .subscribe(
        (params) => {
          console.log(params);
        }
      );
    // if (edit) {
    //   this.model = new ItemModel(data from route);
    // }
    // else {
    //   this.model = new ItemModel();
    // }
  }

  onSubmit() {
    console.log(this.itemForm);
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}