import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  constructor() { }

  getList(): any {
    // return this.httpClient.get<any>(`${this.users_Api}`).pipe(
    //   catchError((error) => {
    //     return throwError(() => console.log(error));
    //   }),
    //   map((responseData) => {
        // return responseData;
    //   })
    // );
  }

  // getList(): Observable<any> {
    // return this.httpClient.get<any>(`${this.users_Api}`).pipe(
    //   catchError((error) => {
    //     return throwError(() => console.log(error));
    //   }),
    //   map((responseData) => {
        // return responseData;
    //   })
    // );
  // }
}
