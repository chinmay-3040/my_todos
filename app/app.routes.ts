import { Routes } from '@angular/router';
// import { RouterModule } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { ErrorComponent } from '../app/error/error.component';





export const routes: Routes = [
    { path: '', component: TodosComponent },
  { path: 'about', component: AboutComponent},
  { path: 'error', component: ErrorComponent},

];
