import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';


const appRoutes: Routes = [
  { path: '', component: ListComponent },
  { path: 'item/new', component: ItemComponent },
  { path: 'item/:id/edit', component: ItemComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}