import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';


const appRoutes: Routes = [
  { path: '', component: ListComponent },
  { path: 'item', component: ItemComponent, children: [
    { path: '', component: ItemComponent },
    { path: 'new', component: ItemComponent },
    { path: ':id/edit', component: ItemComponent },
  ]},
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