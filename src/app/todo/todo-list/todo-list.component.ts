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

  constructor(private readonly todoService: TodoService, public http: HttpClient) {}

  todos$ = new Observable<Todo[]>();

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodo();
    this.todos$.subscribe((todos) => todos)
  }

  updateItemStatus(title: string, comp: boolean, id: number): void {
    const url = `${environment.apiUrl}/todo/${id}`; // Construct the URL
    const updatedData = { 
      title: title,
      completed: comp }; // Data to send in the PUT request
      console.log(updatedData)
    this.http.put(url, {
  title: title,
  completed: comp,
}).subscribe(
      (response) => {
        console.log('Item updated successfully:', response);
        // Handle success (e.g., show a success message)



      },
      (error) => {
        console.error('Error updating item:', error);

        // Handle error (e.g., revert checkbox state, show error message)
        // You might want to revert item.isActive if the update fails
        comp = !comp;
      }
    );
  }
  




/*   updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo);
  }

  async newTodo(title: string) {
    await this.todoService.addTodo(title);
    this.todos = this.todoService.todos;
  } */
}
