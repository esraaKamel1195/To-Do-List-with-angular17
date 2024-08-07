import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, throwError } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  items: Array<Item> = [];
  itemObservable?: Subject<Item[]> = new Subject<Item[]>();
  Api_url: string = 'https://to-do-list-8161a-default-rtdb.firebaseio.com/toDoItems.json';

  constructor(private httpClient: HttpClient) {}

  getList(): Observable<any> {
    return this.httpClient
      .get<any>(
        'https://to-do-list-8161a-default-rtdb.firebaseio.com/toDoItems.json'
      )
      .pipe(
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

  setList(itemDesciption: string): any {
    return this.httpClient
      .post<any>(
        'https://to-do-list-8161a-default-rtdb.firebaseio.com/toDoItems.json',
        {
          description: itemDesciption,
        }
      )
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
    return this.httpClient
      .delete(
        `https://to-do-list-8161a-default-rtdb.firebaseio.com/toDoItems/${item}.json`
      )
      .pipe(
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
    return this.httpClient
      .delete('https://to-do-list-8161a-default-rtdb.firebaseio.com/toDoItems.json')
      .pipe(
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
