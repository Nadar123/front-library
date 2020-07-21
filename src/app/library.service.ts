import { Injectable } from '@angular/core';
import { Observable, throwError, Subject, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  booksSubject:BehaviorSubject<any>;
  books = [
    {
      '_id': '1',
      'name': 'test book',
      'isbn_code': 'th549fsditu',
      'author': 'jhon doe',
      'publising_name': 'good_publising',
      'publising_year': '17-8-1999',
      'expenditure': 'berlin',
    },  
    {
      '_id': '3',
      'name': 'test book-1',
      'isbn_code': 'th549fsditu22',
      'author': 'jhon Jhon',
      'publising_name': 'best of you',
      'publising_year': '17-8-1939',
      'expenditure': 'Tel-Aviv',
    }, 
  ];
  constructor() {
    this.booksSubject = new BehaviorSubject(this.books);
    // this.setBooks(this.books);
   }
  getbooks() {
    return this.booksSubject.asObservable();
  }

  setBooks(books){
    this.booksSubject.next(books);
  }

  getItem(id: string) {
    console.log(id);
    for ( let i = 0; i < this.books.length; i++) {
      if ( this.books[i]._id === id) {
        return this.books[i];
      }
    }
  }

 deleteBook(id: string) {
   this.books = this.books.filter(book => book._id!= id);
   this.setBooks(this.books);
  //  for ( let i = 0; i < this.books.length; i++) {
  //    if ( this.books[i]._id === id) {
  //      this.books.splice(i, 1);
  //      return;
  //    }
  //  }
 }

 add(libraryitem: any) {
   this.books.push(libraryitem);
 }

 create(book: any) {
   book._id = '' + Math.random();
   this.books.push( book );
   return book._id;
 }

  update(book: any ) {
  }
  
}
