import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
/* import { Add } from './tdo/add/add';
import { View } from './people/view/view'; */

const routes: Routes = [
  {
    path: 'todo',
    component: TodoListComponent,
  },
/*   {
    path: 'people/add',
    component: Add,
  },
  {
    path: 'people/:id',
    component: View,
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
