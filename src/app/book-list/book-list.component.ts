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

  headers: any = [
    "Name", 
    "ISBN Code", 
    "Authors", 
    "Publishing Name", 
    "Publishing Year", 
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
    this.findbook();
    
    // this.allBooks$ = this.booksService.findAll().pipe(
    //   map((res:any)=>res.data)
    //   )
    //   this.httpService.post("books",{
        
    //   }).subscribe(res => {
    //   console.log(res);
    // },err => {
    //   console.log(err);
    // })
  }

  findbook () {
    this.allBooks$ = this.booksService.findAll().pipe(
      map((res:any)=>res.data)
      )
      this.httpService.post("books",{
        
      }).subscribe(res => {
      console.log(res);
    },err => {
      console.log(err);
    })
  }

  delete(bookId:string) {
   this.booksService.deleteOne(parseInt(bookId)).subscribe((res:any)=>{
     if(res.code===200){
      this.findbook();
     }
   })
    
  }

  addbook(){
    this.httpService.post("/add",{book:'hello'}).subscribe( res => {
    }) 
  }
}
