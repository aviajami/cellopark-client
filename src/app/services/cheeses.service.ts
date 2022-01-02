import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { Cheese } from '../models/cheese.model';


@Injectable({
  providedIn: 'root'
})
export class CheesesService {

  private readonly SERVER_URL = 'http://localhost:<port>/cheeses';
  
  private cheesesBS = new BehaviorSubject<Array<Cheese>>([]);
  
  cheesesOb = this.cheesesBS.asObservable();

  constructor(private http: HttpClient) { 
    this.get().subscribe(
      x => this.cheesesBS.next(x)
    );
  }



  get() {
    return this.http.get<Array<Cheese>>(this.SERVER_URL).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(() => error); 
  }
}
