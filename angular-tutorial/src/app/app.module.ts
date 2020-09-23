import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    //Components go here, get automatically added via the CLI
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //Module for handling http API requests
  ],
  providers: [],
  bootstrap: [AppComponent],
  //gets bootstrap by default?
})
export class AppModule {}
