import { Component, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo'; // Assuming Todo is defined elsewhere
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo; // Specify the type of the input property
  @Input() i: number; // Specify the type of the input property
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter(); // eventemitter
  @Output() todoCheckBox : EventEmitter<Todo> = new EventEmitter(); // eventemitter

  imagePathUnstared: string = '../../../assets/unstared.png';
  imagePathStared: string = '../../../assets/stared.png';

  currentImagePath: string = this.imagePathUnstared;
  
  constructor() {
    this.i=-1,
    this.todo = {
      sno:0,
      title:"Default title",
      desc:"Default desc",
      active:true
    }; 
  }

  // onClick(){
  //   console.log('Todo item clicked:', this.todo);
  // }
  onClick(todo : Todo){
    console.log('Todo item clicked:');
    this.todoDelete.emit(todo);  //event name is todoDelete
  }

  onCheckboxClick(todo:Todo){
    this.todoCheckBox.emit(todo);  // event name is todoCheckBox
  } 
  onImageClick() {
    // Toggle image path on click
    this.currentImagePath = this.currentImagePath === this.imagePathUnstared ? this.imagePathStared : this.imagePathUnstared;
  }

  ngOnInit(): void {
  }
}
