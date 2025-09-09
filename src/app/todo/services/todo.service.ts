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


  changeTodo(url: string, header: Object):void {
  this.http.put(url, header).subscribe(
      (response) => {
        console.log('Item updated successfully:', response);
        // Handle success (e.g., show a success message)



      },
      (error) => {
        console.error('Error updating item:', error);

        // Handle error (e.g., revert checkbox state, show error message)
        // You might want to revert item.isActive if the update fails
      }
    );
  }

  deleteItem(id: number){
    return this.http.delete(`${environment.apiUrl}/todo/${id}`);
  }
}

