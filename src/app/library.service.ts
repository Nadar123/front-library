import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
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
  constructor() { }
  getbooks() {
    return this.books;
  }

  getItem(id: string) {
    console.log(id);
    for ( let i = 0; i < this.books.length; i++) {
      if ( this.books[i]._id === id) {
        return this.books[i];
      }
    }
  }

 delete(id: string) {
   for ( let i = 0; i < this.books.length; i++) {
     if ( this.books[i]._id === id) {
       this.books.splice(i, 1);
       return;
     }
   }
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
