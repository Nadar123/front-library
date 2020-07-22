import { Injectable } from '@angular/core';
import { Observable, throwError, Subject, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublishingService {
  publishingSubject:BehaviorSubject<any>;
  publishing = [
    {
      '_id':  '5a19c7e100',
      'name': 'Weatles',
      'establish_year': '1980-5-4',
      'country': 'Isreal',
    },
    {
      '_id':  '5a17e100',
      'name': 'name pub',
      'establish_year': '1980-5-4',
      'country': 'usa',
    }
  ]
  constructor() {
    this.publishingSubject = new BehaviorSubject(this.publishing);
    // this.setBooks(this.books);
   }
  getpublishing() {
    return this.publishingSubject.asObservable();
  }

  setPublishing(books){
    this.publishingSubject.next(books);
  }

  getItem(id: string) {
    console.log(id);
    for ( let i = 0; i < this.publishing.length; i++) {
      if ( this.publishing[i]._id === id) {
        return this.publishing[i];
      }
    }
  }

 deleteBook(id: string) {
   this.publishing = this.publishing.filter(book => book._id!= id);
   this.setPublishing(this.publishing);
 }

 add(libraryitem: any) {
   this.publishing.push(libraryitem);
 }

 create(publishing: any) {
  publishing._id = '' + Math.random();
   this.publishing.push( publishing );
   return publishing._id;
 }

  update(publishing: any ) {
  }
  
}
