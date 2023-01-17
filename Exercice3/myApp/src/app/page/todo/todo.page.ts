import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  newTodo!: string

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    console.log(this.newTodo);
}
}
