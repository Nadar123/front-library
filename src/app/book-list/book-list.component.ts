import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../library.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: any;
  constructor(private libraryService: LibraryService ) { }

  ngOnInit(): void {
    this.books = this.libraryService.getbooks();
  }

}
