import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Todo } from '../../Todo';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';



@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,TodoItemComponent,AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  localItem :string="";
  todos : Todo[]=[];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.localItem = localStorage.getItem("todos") ?? "";
      if (this.localItem) {
        this.todos = JSON.parse(this.localItem);
      }
    }
  }
  

  function_to_Delete_todo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    }
    console.log(todo);
  }

  function_to_Add_todo(todo: Todo) {
    this.todos.push(todo);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  function_to_toggle(todo : Todo){
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      console.log(todo);
      this.todos[index].active = !this.todos[index].active;
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    }
  }

}


