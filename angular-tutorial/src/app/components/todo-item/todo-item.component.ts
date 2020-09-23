import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  //Data from parent component need to be defined as an input

  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  //Data to send to parent component, passed through an event emitter

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  //Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };

    return classes;
  }

  onToggle(todo) {
    //Toggle on the UI only
    todo.completed = !todo.completed;

    //Toggle on server
    this.todoService
      .toggleCompleted(todo)
      .subscribe((todo) => console.log('The updated todo: ', todo));
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
