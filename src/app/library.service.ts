// import { Injectable } from '@angular/core';
// import { Observable, throwError, Subject, BehaviorSubject } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class LibraryService {
//   booksSubject:BehaviorSubject<any>;



//   constructor() {
//     //this.booksSubject = new BehaviorSubject(this.books);
//     // this.setBooks(this.books);
//    }
//   getbooks() {
//     return this.booksSubject.asObservable();
//   }

//   setBooks(books){
//     this.booksSubject.next(books);
//   }

//   getItem(id: string) {
//     console.log(id);
//     for ( let i = 0; i < this.books.length; i++) {
//       if ( this.books[i]._id === id) {
//         return this.books[i];
//       }
//     }
//   }

//  deleteBook(id: string) {
//    this.books = this.books.filter(book => book._id!= id);
//    this.setBooks(this.books);
//  }

//  add(libraryitem: any) {
//    this.books.push(libraryitem);
//  }

//  create(book: any) {
//    book._id = '' + Math.random();
//    this.books.push( book );
//    return book._id;
//  }

//   update(book: any ) {
//   }
  
// }
