import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../library.service';
// import { BooksService } from '../services/books.service';
// import { AuthorsService } from '../services/authors.service'
// import { PublishingService } from '../services/publishing.service'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  id: string;
  book: any;
  author: any;
  publishing: any;


  constructor(
    private libraryService: LibraryService,
    // private booksService: BooksService,
    // private authorsService: AuthorsService,
    // private publishingService: PublishingService,
   
    private route:  ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.id = params.id);
    this.book = this.libraryService.getItem(this.id);
  }

  delete() {
    this.libraryService.deleteBook(this.id);
    this.router.navigate(['/']);
  }
  
  btnClick = function () {
    this.router.navigateByUrl('/');
  };
}
