import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { HttpService } from '../services/http.service'
import { NgModel } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BooksService } from '../services/books.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  id: string;
  books: any;
  // authors: any;
  // address: any;
  // pulishing: any;
  headers: any = [
    "name", 
    "ISBN Code", 
    "Authors", 
    "Publising Name", 
    "Publising Year", 
    "Expenditure Place"
  ];
  searchName: string;
  searchBook: string;
  allBooks$:Observable<any[]>
  
 
  constructor(
    
    private http: HttpClient,
    private httpService: HttpService,
    private booksService:BooksService,
    private router: Router ) { 
    }

  ngOnInit(): void {
    this.allBooks$ = this.booksService.findAll().pipe(
      map((res:any)=>res.data)
    )
    this.httpService.post("books",{
      "id": 'aaaa',
      "name": 'test',
      "isbn_code": 'test123'
    }).subscribe(res => {
      console.log(res);
    },err => {
      console.log(err);
    })
    // this.books = this.libraryService.getbooks();
  }


  delete(bookId:string) {
   // this.libraryService.deleteBook(bookId);
    this.router.navigate(['/']);
  }

  addbook(){
    this.httpService.post("/add",{book:'hello'}).subscribe( res => {
    }) 
  }
}
