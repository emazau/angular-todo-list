import { inject, Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from 'environments/environment';


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);

  private todoId = 1;
  private todoList: Todo[] = [
    {
      id: this.todoId++,
      title: 'serve the app',
      completed: true,
    },
    {
      id: this.todoId++,
      title: 'familiarise yourself with the codebase',
      completed: false,
    },
    {
      id: this.todoId++,
      title: 'start talking to the api',
      completed: false,
    },
  ];



  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.apiUrl}/todo`);
  }

  addTodo(title: string) {
  // @ts-ignore
    firstValueFrom(
    this.http.post(`${environment.apiUrl}/todo`, {
    title: title,
    })
  );
}
}
