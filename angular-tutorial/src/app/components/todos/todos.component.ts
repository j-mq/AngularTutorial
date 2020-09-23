import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  //Used as directive in HTML, becomes an HTML tag
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  //Defined inside models on app/models/

  constructor(private todoService: TodoService) {
    //Initialize services
  }

  ngOnInit(): void {
    //Lifecycle method, like "ComponentDidMount" on React
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
    //Is being return like a promise
  }

  deleteTodo(todo: Todo) {
    //Delete from the UI
    //Make delete request
  }
}
