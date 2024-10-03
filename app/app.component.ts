import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodosComponent,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My_Todos';
  constructor(){
      setTimeout(() => {
        this.title = "hard"
      }, 4000);
  }
}
