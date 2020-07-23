import { Injectable } from '@angular/core';
import { Observable, throwError, Subject, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { URLS } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksSubject:BehaviorSubject<any>;

  constructor(private http:HttpClient) { }

  createNewBook(bookForm:any){
    return this.http.post(URLS.API_URL+'books',{bookForm})
  }
  findOne(id:number){
    return this.http.get(URLS.API_URL+`books/${id}`)
  }
  updateBook(bookForm:any){
    return this.http.post(URLS.API_URL+`books/${bookForm.id}`,{bookForm})
  }
  findAll(){
    return this.http.get(URLS.API_URL+`books`)
  }

}