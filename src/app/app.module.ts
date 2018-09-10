import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListService } from './list/list.service';
import { ItemComponent } from './item/item.component';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent
  ],
  providers: [
    ListService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }