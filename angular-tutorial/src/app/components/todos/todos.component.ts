import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  //Used as directive in HTML, becomes an HTML tag
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  //Defined inside models on app/models/

  constructor() {}

  ngOnInit(): void {
    //Lifecycle method, like "ComponentDidMount" on React
    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: false,
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true,
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: false,
      },
    ];
  }
}
