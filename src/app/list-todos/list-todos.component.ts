import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public done: boolean,
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];

  message: string = ''

  constructor(private todoService : TodoDataService,
    private router : Router) {

  }

  ngOnInit(): void {
    this.refreshTodos();
  }

  deleteTodo(id : number) {
    this.todoService.deleteTodo('in28min', id).subscribe(
      responce => {
        console.log('Heeeereee' + responce);
        this.message = `Delete of todo ${id}`
        this.refreshTodos();
      }
    );
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('in28min').subscribe(
      responce => this.todos = responce
    );
  }

  updateTodo(id : number) {
    this.router.navigate(['todos', id])
    // this.todoService.updateTodo('in28min', id).subscribe(
    //   responce => {
    //     console.log('Heeeereee' + responce);
    //     this.message = `Delete of todo ${id}`
    //     this.refreshTodos();
    //   }
    // );
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }

}
