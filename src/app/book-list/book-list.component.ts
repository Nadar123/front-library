import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../library.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { HttpService } from '../services/http.service'
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  id: string;
  books: any;
  headers:any = [
    "name", 
    "ISBN Code", 
    "Authors", 
    "Publising Name", 
    "Publising Year", 
    "Expenditure Place"
  ];
  
  booksSubscription:Subscription = new Subscription();
  constructor(
    private libraryService: LibraryService,
    private http: HttpClient,
    private httpService: HttpService,
    private router: Router ) { 

      this.booksSubscription = this.libraryService.getbooks().subscribe(books=>{
        this.books = books;
      })
    }

  ngOnInit(): void {
    this.httpService.get("books").subscribe(res => {
      console.log(res);
    },err => {
      console.log(err);
    })
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
    this.libraryService.deleteBook(bookId);
    this.router.navigate(['/']);
  }

  addbook(){
    this.httpService.post("/add",{book:'hello'}).subscribe( res => {
    })
  }
}
