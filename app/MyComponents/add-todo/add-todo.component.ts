import { Component,OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { Todo } from '../../Todo'; // Assuming Todo is defined elsewhere
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit{

  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter(); // eventemitter

  title:string="";
  desc:string="";
  constructor(){
   
  }
  onSubmit(){
    const todo={
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
  }
  ngOnInit(): void {
  }
}


