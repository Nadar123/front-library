import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }
  authors = [
    {
      '_id':  '5a19c76ede1c43306c98e300',
      'first_name': 'rrr ffff',
      'last_name': 'last name',
      'date_of_birth': '1987-3-2' 
    },
    {
      '_id':  'ff5a19c76ede1c43306c98e300',
      'first_name': 'ffffrrr ffff',
      'last_name': 'last name-2',
      'date_of_birth': '1987-3-2' 
    }
  ];

  getItems() {
    return this.authors;
  }
 getItem(id: string) {
   console.log(id);
   for ( let i = 0; i < this.authors.length; i++) {
     if ( this.authors[i]._id === id) {
       return this.authors[i];
     }
   }
 }
 delete(id: string) {
   for ( let i = 0; i < this.authors.length; i++) {
     if ( this.authors[i]._id === id) {
       this.authors.splice(i, 1);
       return;
     }
   }

 }
 add(blogitem: any) {
   this.authors.push(blogitem);
 }
 create(item: any) {
   item._id = '' + Math.random();
   this.authors.push( item );
   return item._id;
 }

   update(item: any ) {
   }
}
