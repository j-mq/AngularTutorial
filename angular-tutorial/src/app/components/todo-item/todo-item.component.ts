import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  //Data from parent component need to be defined as an input

  constructor() {}

  ngOnInit(): void {}

  //Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };

    return classes;
  }
}
