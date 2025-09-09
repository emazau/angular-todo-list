import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
    import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  item: Todo = { id: 0, title: 'Example Item', completed: true }; // Example item

  constructor(private readonly todoService: TodoService) {}

  todos$ = new Observable<Todo[]>();

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodo();
    this.todos$.subscribe((todos) => todos)
  }

  updateItemStatus(title: string, comp: boolean, id: number): void {
    const url = `${environment.apiUrl}/todo/${id}`; // Construct the URL    
      this.todoService.changeTodo(url, {
  title: title,
  completed: comp,})

  }

  deleteItem(id:number){
    this.todoService.deleteItem(id).subscribe({
      next: () => {
        console.log("item delted successfully");
      },
      error: (error) =>{
        console.error("eeroror deleteding item: ", error)
      }

    })
  }
  




/*   updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo);
  }

  async newTodo(title: string) {
    await this.todoService.addTodo(title);
    this.todos = this.todoService.todos;
  } */
}
