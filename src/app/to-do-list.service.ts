import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, throwError } from 'rxjs';
import { TodoItem } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  items: Array<TodoItem> = [];
  itemObservable?: Subject<TodoItem []> = new Subject<TodoItem []>();
  Api_url: string =
    'https://to-do-list-8161a-default-rtdb.firebaseio.com/toDoItems';

  constructor(private httpClient: HttpClient) {}

  getList(): Observable<any> {
    return this.httpClient.get<any>(`${this.Api_url}.json`).pipe(
      catchError((error) => {
        return throwError(() => console.log(error));
      }),
      map((responseData: { [key: string]: any[] }) => {
        const modifiedData: any = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            modifiedData.push({ ...responseData[key], id: key });
          }
        }
        return modifiedData;
      })
    );
  }

  setList(itemTitle: string): any {
    return this.httpClient
      .post<any>(`${this.Api_url}.json`, {
        title: itemTitle,
      })
      .pipe(
        catchError((error) => {
          return throwError(() => console.log(error));
        }),
        map((responseData) => {
          this.items = responseData;
          return this.items;
        })
      );
  }

  removeItem(item: string): any {
    return this.httpClient.delete(`${this.Api_url}/${item}.json`).pipe(
      catchError((error) => {
        return throwError(() => console.log(error));
      }),
      map((responseData) => {
        console.log('remove item');
        return responseData;
      })
    );
  }

  removeList(): any {
    return this.httpClient.delete(`${this.Api_url}.json`).pipe(
      catchError((error) => {
        return throwError(() => console.log(error));
      }),
      map((responseData) => {
        this.items = [];
        return responseData;
      })
    );
  }
}
