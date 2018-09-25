import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { ListService } from './../list/list.service';
import { ItemModel } from './../list/item.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {
  // model initialization has to be,
  // if not can be type error, context error
  model: ItemModel = new ItemModel();
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
        (params: Params) => {
          this.id = +params['id'];
          if (this.id === this.id) {
            // this.model = this.listService.getItem(this.id);
            this.listService.getItem(this.id)
              .subscribe(item => {
                this.model = item;
              });
            this.editMode = true;
          } else {
            this.model = { id: 0, name: '' };
            this.editMode = false;
          }
        }
      );
  }

  onSubmit() {
    const name = this.itemForm.value.name;
    const changedItem = new ItemModel(this.id, name);
    const newItem = new ItemModel(null, name);
    this.editMode
      ? this.listService.updateItem(changedItem).subscribe()
      : this.listService.addItem(newItem).subscribe();
    this.itemForm.reset();
    this.router.navigate(['/'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}